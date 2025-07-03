import OverviewCharts from "@/components/dashboard/overview-charts";
import StatsCard from "@/components/dashboard/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Clock,
  AlertTriangle,
  Eye,
  TrendingUp
} from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">ড্যাশবোর্ড ওভারভিউ</h1>
          <p className="text-sm mt-1">চাকরির সার্কুলার পরিসংখ্যান ও বিশ্লেষণ</p>
        </div>
        <div className="text-right">
          <p className="text-sm">সর্বশেষ আপডেট</p>
          <p className="text-sm font-medium">{new Date().toLocaleDateString('bn-BD')}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatsCard
          title="মোট সার্কুলার"
          value="২৪৮"
          description="সর্বমোট প্রকাশিত সার্কুলার"
          icon={FileText}
          trend="up"
          trendValue="+১২%"
          className="xl:col-span-2"
        />

        <StatsCard
          title="আজকের নতুন"
          value="৮"
          description="আজ প্রকাশিত নতুন সার্কুলার"
          icon={TrendingUp}
          trend="up"
          trendValue="+৩৫%"
          className="xl:col-span-1"
        />

        <StatsCard
          title="চলমান সার্কুলার"
          value="১৫৬"
          description="বর্তমানে সক্রিয় সার্কুলার"
          icon={Clock}
          trend="neutral"
          trendValue="স্থিতিশীল"
          className="xl:col-span-1"
        />

        <StatsCard
          title="ডেডলাইনের কাছাকাছি"
          value="২৩"
          description="৭ দিনের মধ্যে শেষ হবে"
          icon={AlertTriangle}
          trend="down"
          trendValue="-৮%"
          className="xl:col-span-1"
        />

        <StatsCard
          title="সর্বাধিক ভিউ"
          value="৩২,৪৫০"
          description="এই মাসের মোট ভিউ"
          icon={Eye}
          trend="up"
          trendValue="+২৮%"
          className="xl:col-span-1"
        />
      </div>

      <OverviewCharts />

 <div className="grid gap-6 md:grid-cols-2">
      {/* দ্রুত পরিসংখ্যান */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">দ্রুত পরিসংখ্যান</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span>সরকারি চাকরি</span>
            <span className="font-medium text-slate-900">১১২টি</span>
          </div>
          <div className="flex justify-between items-center">
            <span>বেসরকারি চাকরি</span>
            <span className="font-medium text-slate-900">৮৬টি</span>
          </div>
          <div className="flex justify-between items-center">
            <span>ব্যাংক চাকরি</span>
            <span className="font-medium text-slate-900">৩৭টি</span>
          </div>
          <div className="flex justify-between items-center">
            <span>এনজিও চাকরি</span>
            <span className="font-medium text-slate-900">১৩টি</span>
          </div>
        </CardContent>
      </Card>

      {/* সাম্প্রতিক কার্যক্রম */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">সাম্প্রতিক কার্যক্রম</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
            <div>
              <p className="text-sm ">নতুন সার্কুলার প্রকাশিত</p>
              <p className="text-xs text-slate-500">২ ঘন্টা আগে</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
            <div>
              <p className="text-sm ">সার্কুলার আপডেট করা হয়েছে</p>
              <p className="text-xs text-slate-500">৫ ঘন্টা আগে</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5"></div>
            <div>
              <p className="text-sm ">ডেডলাইন শেষ হয়েছে</p>
              <p className="text-xs text-slate-500">১ দিন আগে</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}

export default Home;