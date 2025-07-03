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
import { Badge } from "@/components/ui/badge";
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
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface JobCircular {
  id: string;
  title: string;
  institution: string;
  trade: string;
  deadline: string;
  status: "ongoing" | "completed";
  views: number;
  publishedAt: string;
}

// Extended mock data for pagination demonstration
const mockData: JobCircular[] = [
  {
    id: "1",
    title: "সহকারী প্রকৌশলী নিয়োগ",
    institution: "বাংলাদেশ সড়ক পরিবহন কর্পোরেশন",
    trade: "প্রকৌশল",
    deadline: "২০২৪-০২-১৫",
    status: "ongoing",
    views: 1250,
    publishedAt: "২০২৪-০১-১০"
  },
  {
    id: "2",
    title: "জুনিয়র অফিসার পদে নিয়োগ",
    institution: "সোনালী ব্যাংক লিমিটেড",
    trade: "ব্যাংকিং",
    deadline: "২০২৪-০২-২৮",
    status: "ongoing",
    views: 2100,
    publishedAt: "২০২৪-০১-১২"
  },
  {
    id: "3",
    title: "শিক্ষক নিয়োগ বিজ্ঞপ্তি",
    institution: "ঢাকা শিক্ষা বোর্ড",
    trade: "শিক্ষা",
    deadline: "২০২৪-০১-৩১",
    status: "completed",
    views: 3200,
    publishedAt: "২০২৪-০১-০৫"
  },
  {
    id: "4",
    title: "মেডিকেল অফিসার নিয়োগ",
    institution: "স্বাস্থ্য অধিদপ্তর",
    trade: "চিকিৎসা",
    deadline: "২০২৪-০৩-১০",
    status: "ongoing",
    views: 1800,
    publishedAt: "২০২৪-০১-১৫"
  },
  {
    id: "5",
    title: "সফটওয়্যার ইঞ্জিনিয়ার",
    institution: "টেক কোম্পানি লিমিটেড",
    trade: "তথ্যপ্রযুক্তি",
    deadline: "২০২৪-০৩-২০",
    status: "ongoing",
    views: 2800,
    publishedAt: "২০২৪-০১-২০"
  },
  {
    id: "6",
    title: "অ্যাকাউন্ট্যান্ট নিয়োগ",
    institution: "জনতা ব্যাংক",
    trade: "ব্যাংকিং",
    deadline: "২০২৪-০২-২৫",
    status: "ongoing",
    views: 1650,
    publishedAt: "২০২৪-০১-১৮"
  },
  {
    id: "7",
    title: "সিভিল ইঞ্জিনিয়ার",
    institution: "পানি উন্নয়ন বোর্ড",
    trade: "প্রকৌশল",
    deadline: "২০২৪-০৩-০৫",
    status: "ongoing",
    views: 1950,
    publishedAt: "২০২৪-০১-২২"
  },
  {
    id: "8",
    title: "নার্স নিয়োগ",
    institution: "ঢাকা মেডিকেল কলেজ",
    trade: "চিকিৎসা",
    deadline: "২০২৪-০২-১০",
    status: "completed",
    views: 2400,
    publishedAt: "২০২৪-০১-০৮"
  },
  {
    id: "9",
    title: "প্রভাষক নিয়োগ",
    institution: "ঢাকা বিশ্ববিদ্যালয়",
    trade: "শিক্ষা",
    deadline: "২০২৪-০৩-১৫",
    status: "ongoing",
    views: 3500,
    publishedAt: "২০২৪-০১-২৫"
  },
  {
    id: "10",
    title: "প্রশাসনিক কর্মকর্তা",
    institution: "জেলা প্রশাসকের কার্যালয়",
    trade: "প্রশাসন",
    deadline: "২০২৪-০২-২০",
    status: "ongoing",
    views: 2200,
    publishedAt: "২০২৪-০১-১৬"
  },
  {
    id: "11",
    title: "ডেটা এন্ট্রি অপারেটর",
    institution: "পরিসংখ্যান ব্যুরো",
    trade: "তথ্যপ্রযুক্তি",
    deadline: "২০২৪-০২-১২",
    status: "completed",
    views: 1800,
    publishedAt: "২০২৪-০১-০৭"
  },
  {
    id: "12",
    title: "ল্যাব টেকনিশিয়ান",
    institution: "চট্টগ্রাম মেডিকেল কলেজ",
    trade: "চিকিৎসা",
    deadline: "২০২৪-০৩-০৮",
    status: "ongoing",
    views: 1400,
    publishedAt: "২০২৪-০১-২৮"
  }
];

const trades = [
  { value: "all", label: "সব ট্রেড" },
  { value: "প্রকৌশল", label: "প্রকৌশল" },
  { value: "ব্যাংকিং", label: "ব্যাংকিং" },
  { value: "শিক্ষা", label: "শিক্ষা" },
  { value: "চিকিৎসা", label: "চিকিৎসা" },
  { value: "তথ্যপ্রযুক্তি", label: "তথ্যপ্রযুক্তি" },
  { value: "প্রশাসন", label: "প্রশাসন" }
];

export default function AllJobCircular() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrade, setSelectedTrade] = useState("all");
  const [data, setData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filter data based on search term and trade
  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrade = selectedTrade === "all" || item.trade === selectedTrade;
    return matchesSearch && matchesTrade;
  });

  // Pagination calculations
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

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
    console.log("Edit circular:", id);
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
    // Adjust current page if necessary
    const newTotalPages = Math.ceil((totalItems - 1) / itemsPerPage);
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
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
              <Select value={selectedTrade} onValueChange={handleTradeChange}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="ট্রেড বাছাই করুন" />
                </SelectTrigger>
                <SelectContent>
                  {trades.map((trade) => (
                    <SelectItem key={trade.value} value={trade.value}>
                      {trade.label}
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
                  <TableHead className="text-foreground font-semibold">ডেডলাইন</TableHead>
                  <TableHead className="text-foreground font-semibold">অবস্থা</TableHead>
                  <TableHead className="text-foreground font-semibold">ভিউ</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((circular) => (
                  <TableRow key={circular.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">{circular.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          প্রকাশিত: {circular.publishedAt}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-foreground">
                        <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                        {circular.institution}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {circular.trade}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-foreground">{circular.deadline}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={circular.status === 'ongoing' ? 'default' : 'secondary'}
                        className={cn(
                          circular.status === 'ongoing'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                        )}
                      >
                        {circular.status === 'ongoing' ? 'চলমান' : 'সমাপ্ত'}
                      </Badge>
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
                          onClick={() => handleEdit(circular.id)}
                          className="hover:bg-blue-50 dark:hover:bg-blue-900"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(circular.id)}
                          className="hover:bg-red-50 dark:hover:bg-red-900 text-red-600 border-red-200"
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

          {currentData.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              কোনো সার্কুলার খুঁজে পাওয়া যায়নি।
            </div>
          )}

          {/* Pagination */}
          {totalItems > 0 && (
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

              <div className="text-sm text-muted-foreground">
                {startIndex + 1}-{Math.min(endIndex, totalItems)} এর {totalItems} টি
              </div>

              <div className="flex items-center space-x-1">
                <Button variant="outline" size="sm" onClick={() => goToPage(1)} disabled={currentPage === 1} className="h-8 w-8 p-0">
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="h-8 w-8 p-0">
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => goToPage(pageNum)}
                      className="h-8 w-8 p-0"
                    >
                      {pageNum}
                    </Button>
                  )
                })}

                <Button variant="outline" size="sm" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="h-8 w-8 p-0">
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages} className="h-8 w-8 p-0">
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>

  );
}