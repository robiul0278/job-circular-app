"use client"

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  TimerReset,
  Loader,
  User,
  View,
} from "lucide-react";
import { useDeleteJobMutation, useGetAllJobsQuery } from "@/redux/api/api";
import { TGenericErrorResponse, IJobCircular } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { categoryToBangla, formatQuery } from "@/utils/utils";
import { formatDate } from "@/utils/format-date";
import Pagination from "@/components/dashboard/Pagination";
import Link from "next/link";

type TCategories = {
  category: string;
  count: number;
}


export default function AllCircularPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const router = useRouter()

  const params = {
    ...(selectedCategory && { categories: selectedCategory }),
    page: currentPage,
    limit: itemsPerPage,
    searchTerm: searchTerm,
  };
  const [DeleteJob] = useDeleteJobMutation()
  const { data, isLoading } = useGetAllJobsQuery(params);


  if (isLoading) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Loader />
      <p className="text-sm text-muted-foreground">সকল সার্কুলার লোড হচ্ছে...</p>
    </div>
  );

  const tableData = data?.data.result;
  const categories = data?.data.categories;

  // Reset to first page when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    if (value === "all") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(value);
    }
    setCurrentPage(1);
  };

  const handleEdit = (id: string) => {
    // if (!confirm('Edit this circular?')) return;
    router.push(`/dashboard/update-circular/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this circular?')) return;

    try {
      const res = await DeleteJob(id).unwrap();
      if (res?.deletedCount === 1) {
        toast.success(`${res.message}`);
      } else {
        toast.error(`${res.message}`);
      }
    } catch (err: unknown) {
      const error = err as { data: TGenericErrorResponse };
      toast.error(error?.data?.message || 'Delete failed.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">সকল চাকরির সার্কুলার</h1>
          <p className="text-sm mt-1 text-muted-foreground">
            সাম্প্রতিক ও চলমান সকল সরকারি, বেসরকারি, ব্যাংক ও এনজিও চাকরি
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">সর্বশেষ আপডেট</p>
          <p className="text-sm font-medium text-foreground">
            {new Date().toLocaleDateString('bn-BD')}
          </p>
        </div>
      </div>

      {/* Table Card */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">সার্কুলার তালিকা</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="সার্চ করুন..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-52">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="ট্রেড বাছাই করুন" />
                </SelectTrigger>

                <SelectContent>
                  {/* Optional: Empty/default item */}
                  <SelectItem value="all" className="!p-0">
                    <div className="flex justify-between items-center px-3 py-2 w-full">
                      <span>সব ট্রেড</span>
                    </div>
                  </SelectItem>
                  {categories?.map((trade: TCategories, index: number) => (
                    <SelectItem
                      key={index}
                      value={trade.category}
                      className="!p-0" // remove default padding to style our div fully
                    >
                      <div className="flex justify-between items-center px-3 py-2 w-full">

                        <span>{formatQuery(trade.category)}</span>
                        <Badge variant="outline" className="ml-2 dark:bg-gray-600 text-xs">
                          {trade.count}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-foreground font-semibold">Job Title</TableHead>
                  <TableHead className="text-foreground font-semibold">Organization</TableHead>
                  <TableHead className="text-foreground font-semibold">Views</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData?.map((circular: IJobCircular, index: number) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="space-y-2">
                        <h1 className="font-medium text-foreground">{circular.title}</h1>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <TimerReset className="h-3 w-3 mr-1" />
                          Deadline:<span className="text-red-500"> {formatDate(circular.deadline)}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        {circular.companyName}
                        <div className="text-xs text-muted-foreground">
                          {categoryToBangla(circular.categories)}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-muted-foreground">
                        <Eye className="h-4 w-4 mr-1" />
                        {circular.views.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Link href={`/job/${circular.slug}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-green-50 dark:hover:bg-green-900 cursor-pointer"
                          >
                            <View className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(circular.slug)}
                          className="hover:bg-green-50 dark:hover:bg-green-900 cursor-pointer"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(circular._id)}
                          className="hover:bg-red-50 dark:hover:bg-red-900 text-red-600 border-red-200 cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">প্রতি পৃষ্ঠায় দেখান:</span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => {
                  setItemsPerPage(Number(value))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">৫</SelectItem>
                  <SelectItem value="10">১০</SelectItem>
                  <SelectItem value="20">২০</SelectItem>
                  <SelectItem value="50">৫০</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Pagination totalPage={data?.data.meta.totalPage} page={currentPage} setPageAction={setCurrentPage} />
          </div>
        </CardContent>
      </Card>
    </div >

  );
}