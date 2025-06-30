'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Edit,
  Trash2,
  Shield,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ban,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "moderator" | "user";
  status: "active" | "inactive" | "suspended";
  avatar?: string;
  joinDate: string;
  lastLogin: string;
  location: string;
  totalApplications: number;
  verificationStatus: "verified" | "pending" | "rejected";
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "মোহাম্মদ রহিম",
    email: "rahim@example.com",
    phone: "০১৭১২৩৪৫৬৭৮",
    role: "admin",
    status: "active",
    joinDate: "২০২৩-০১-১৫",
    lastLogin: "২০২৪-০১-২৮",
    location: "ঢাকা",
    totalApplications: 0,
    verificationStatus: "verified"
  },
  {
    id: "2",
    name: "ফাতেমা খাতুন",
    email: "fatema@example.com",
    phone: "০১৮১২৩৪৫৬৭৮",
    role: "moderator",
    status: "active",
    joinDate: "২০২৩-০৩-২২",
    lastLogin: "২০২৪-০১-২৭",
    location: "চট্টগ্রাম",
    totalApplications: 5,
    verificationStatus: "verified"
  },
  {
    id: "3",
    name: "আহমেদ হাসান",
    email: "ahmed@example.com",
    phone: "০১৯১২৩৪৫৬৭৮",
    role: "user",
    status: "active",
    joinDate: "২০২৩-০৬-১০",
    lastLogin: "২০২৪-০১-২৬",
    location: "সিলেট",
    totalApplications: 12,
    verificationStatus: "verified"
  },
  {
    id: "4",
    name: "নাসির উদ্দিন",
    email: "nasir@example.com",
    phone: "০১৬১২৩৪৫৬৭৮",
    role: "user",
    status: "inactive",
    joinDate: "২০২৩-০৮-০৫",
    lastLogin: "২০২৩-১২-১৫",
    location: "রাজশাহী",
    totalApplications: 8,
    verificationStatus: "pending"
  },
  {
    id: "5",
    name: "সালমা বেগম",
    email: "salma@example.com",
    phone: "০১৫১২৩৪৫৬৭৮",
    role: "user",
    status: "suspended",
    joinDate: "২০২৩-০৯-১২",
    lastLogin: "২০২৪-০১-২০",
    location: "খুলনা",
    totalApplications: 3,
    verificationStatus: "rejected"
  },
  {
    id: "6",
    name: "করিম উল্লাহ",
    email: "karim@example.com",
    phone: "০১৪১২৩৪৫৬৭৮",
    role: "user",
    status: "active",
    joinDate: "২০২৩-১০-০৮",
    lastLogin: "২০২৪-০১-২৮",
    location: "বরিশাল",
    totalApplications: 15,
    verificationStatus: "verified"
  },
  {
    id: "7",
    name: "রাশিদা আক্তার",
    email: "rashida@example.com",
    phone: "০১৩১২৩৪৫৬৭৮",
    role: "user",
    status: "active",
    joinDate: "২০২৩-১১-২৫",
    lastLogin: "২০২৪-০১-২৫",
    location: "রংপুর",
    totalApplications: 7,
    verificationStatus: "verified"
  },
  {
    id: "8",
    name: "তানভীর হোসেন",
    email: "tanvir@example.com",
    phone: "০১২১২৩৪৫৬৭৮",
    role: "user",
    status: "active",
    joinDate: "২০২৩-১২-০৩",
    lastLogin: "২০২৪-০১-২৪",
    location: "ময়মনসিংহ",
    totalApplications: 9,
    verificationStatus: "pending"
  }
];

const roles = [
  { value: "all", label: "সব ভূমিকা" },
  { value: "admin", label: "অ্যাডমিন" },
  { value: "moderator", label: "মডারেটর" },
  { value: "user", label: "ইউজার" }
];

const statuses = [
  { value: "all", label: "সব অবস্থা" },
  { value: "active", label: "সক্রিয়" },
  { value: "inactive", label: "নিষ্ক্রিয়" },
  { value: "suspended", label: "স্থগিত" }
];

const Page = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);


  console.log(selectedUser,isEditUserOpen );

  // Filter users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.includes(searchTerm);
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Pagination
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin": return "bg-red-100 text-red-800";
      case "moderator": return "bg-blue-100 text-blue-800";
      case "user": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-yellow-100 text-yellow-800";
      case "suspended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getVerificationColor = (status: string) => {
    switch (status) {
      case "verified": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsEditUserOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleStatusToggle = (userId: string, newStatus: "active" | "inactive" | "suspended") => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  // Stats calculation
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === "active").length;
  const adminUsers = users.filter(u => u.role === "admin").length;
  const pendingVerifications = users.filter(u => u.verificationStatus === "pending").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">ইউজার ম্যানেজমেন্ট</h1>
          <p className="text-slate-600 text-sm mt-1">সিস্টেমের সকল ইউজার পরিচালনা করুন</p>
        </div>
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              নতুন ইউজার যোগ করুন
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>নতুন ইউজার যোগ করুন</DialogTitle>
              <DialogDescription>
                নতুন ইউজারের তথ্য পূরণ করুন
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">নাম</Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">ইমেইল</Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">ফোন</Label>
                <Input id="phone" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">ভূমিকা</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">ইউজার</SelectItem>
                    <SelectItem value="moderator">মডারেটর</SelectItem>
                    <SelectItem value="admin">অ্যাডমিন</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">সংরক্ষণ করুন</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">মোট ইউজার</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">সর্বমোট নিবন্ধিত ইউজার</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">সক্রিয় ইউজার</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeUsers}</div>
            <p className="text-xs text-muted-foreground">বর্তমানে সক্রিয় ইউজার</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">অ্যাডমিন</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adminUsers}</div>
            <p className="text-xs text-muted-foreground">সিস্টেম অ্যাডমিনিস্ট্রেটর</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">যাচাইকরণ অপেক্ষমাণ</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingVerifications}</div>
            <p className="text-xs text-muted-foreground">যাচাইয়ের অপেক্ষায়</p>
          </CardContent>
        </Card>
      </div>

      {/* User Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-slate-900">ইউজার তালিকা</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="নাম, ইমেইল বা ফোন দিয়ে খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={selectedRole} onValueChange={handleRoleChange}>
                <SelectTrigger className="w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
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
                <TableRow className="bg-slate-50">
                  <TableHead className="font-semibold text-slate-700">ইউজার</TableHead>
                  <TableHead className="font-semibold text-slate-700">যোগাযোগ</TableHead>
                  <TableHead className="font-semibold text-slate-700">ভূমিকা</TableHead>
                  <TableHead className="font-semibold text-slate-700">অবস্থা</TableHead>
                  <TableHead className="font-semibold text-slate-700">যাচাইকরণ</TableHead>
                  <TableHead className="font-semibold text-slate-700">আবেদন</TableHead>
                  <TableHead className="font-semibold text-slate-700">শেষ লগইন</TableHead>
                  <TableHead className="font-semibold text-slate-700 text-right">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-slate-50/50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-slate-900">{user.name}</div>
                          <div className="text-xs text-slate-500 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {user.location}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-slate-600">
                          <Mail className="h-3 w-3 mr-1" />
                          {user.email}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Phone className="h-3 w-3 mr-1" />
                          {user.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        {user.role === "admin" ? "অ্যাডমিন" : 
                         user.role === "moderator" ? "মডারেটর" : "ইউজার"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status === "active" ? "সক্রিয়" : 
                         user.status === "inactive" ? "নিষ্ক্রিয়" : "স্থগিত"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getVerificationColor(user.verificationStatus)}>
                        {user.verificationStatus === "verified" ? "যাচাইকৃত" : 
                         user.verificationStatus === "pending" ? "অপেক্ষমাণ" : "প্রত্যাখ্যাত"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-center">
                        <span className="font-medium">{user.totalApplications}</span>
                        <div className="text-xs text-slate-500">টি আবেদন</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-slate-600">
                        {user.lastLogin}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditUser(user)}
                          className="hover:bg-blue-50"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleStatusToggle(user.id, user.status === "active" ? "suspended" : "active")}
                          className={cn(
                            "hover:bg-yellow-50",
                            user.status === "suspended" && "text-green-600 border-green-200"
                          )}
                        >
                          {user.status === "suspended" ? <CheckCircle className="h-4 w-4" /> : <Ban className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteUser(user.id)}
                          className="hover:bg-red-50 text-red-600 border-red-200"
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

          {currentUsers.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              কোনো ইউজার খুঁজে পাওয়া যায়নি।
            </div>
          )}

          {/* Pagination */}
          {totalItems > 0 && (
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600">প্রতি পৃষ্ঠায় দেখান:</span>
                <Select 
                  value={itemsPerPage.toString()} 
                  onValueChange={(value) => {
                    setItemsPerPage(Number(value));
                    setCurrentPage(1);
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

              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600">
                  {startIndex + 1}-{Math.min(endIndex, totalItems)} এর {totalItems} টি
                </span>
              </div>

              <div className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(1)}
                  disabled={currentPage === 1}
                  className="h-8 w-8 p-0"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="h-8 w-8 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => goToPage(pageNum)}
                      className="h-8 w-8 p-0"
                    >
                      {pageNum}
                    </Button>
                  );
                })}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8 p-0"
                >
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

export default Page;