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
  Calendar,
  Building,
  ListEnd,
} from "lucide-react";
import ErrorMessage from "@/components/ErrorMessage";
import { useDeleteJobMutation, useGetAllJobsQuery } from "@/redux/api/api";
import Loader from "@/components/Loader";
import { IJobPost, TGenericErrorResponse } from "@/types";
import { Badge } from "@/components/ui/badge";
import Pagination from "@/components/Pagination";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { formatQuery } from "@/utils/utils";

type ITechnology = {
  technology: string;
  count: number;
}

export default function AllCircularPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrade, setSelectedTrade] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const router = useRouter()

  const params = {
    ...(selectedTrade && { technology: selectedTrade }),
    page: currentPage,
    limit: itemsPerPage,
    searchTerm: searchTerm,
  };

  const { data, isLoading, isError } = useGetAllJobsQuery(params);
  const [DeleteJob] = useDeleteJobMutation()

  const tableData = data?.data.result;
  const trades = data?.data.technologyCount;

  // Reset to first page when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleTradeChange = (value: string) => {
    setSelectedTrade(value);
    setCurrentPage(1);
  };

  const handleEdit = (id: string) => {
    if (!confirm('Edit this circular?')) return;
    console.log("Edit circular:", id);
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
      console.log(error);
      toast.error(error?.data?.message || 'Delete failed.');
    }
  };


  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;


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
              <Select value={selectedTrade} onValueChange={handleTradeChange}>
                <SelectTrigger className="w-52">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="ট্রেড বাছাই করুন" />
                </SelectTrigger>
                <SelectContent>
                  {trades.map((trade: ITechnology, index: number) => (
                    <SelectItem
                      key={index}
                      value={trade.technology}
                      className="!p-0" // remove default padding to style our div fully
                    >
                      <div className="flex justify-between items-center px-3 py-2 w-full">

                        <span>{formatQuery(trade.technology)}</span>
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
                  <TableHead className="text-foreground font-semibold">টাইটেল</TableHead>
                  <TableHead className="text-foreground font-semibold">প্রতিষ্ঠান</TableHead>
                  <TableHead className="text-foreground font-semibold">ট্রেড</TableHead>
                  <TableHead className="text-foreground font-semibold">ভিউ</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((circular: IJobPost, index: number) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">{circular.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Apply Start: {circular.applyStart}
                        </div>

                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-foreground">
                        <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                        {circular.companyName}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <ListEnd className="h-3 w-3 mr-1" />
                        Deadline: {circular.deadline}</div>
                    </TableCell>
                    <TableCell>
                      <ul className="flex flex-wrap gap-">
                        {circular.technology.map((trade, index) => (
                          <li
                            key={index}
                            className="bg-slate-100 text-sm font-medium px-2 py-1 rounded-md dark:bg-slate-800"
                          >
                            {formatQuery(trade)}
                          </li>
                        ))}
                      </ul>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center text-muted-foreground">
                        <Eye className="h-4 w-4 mr-1" />
                        {circular.views.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(circular._id)}
                          className="hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer"
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
            <Pagination totalPages={data?.data.meta.totalPage} currentPage={currentPage} setCurrentPageAction={setCurrentPage} />
          </div>
        </CardContent>
      </Card>
    </div>

  );
}