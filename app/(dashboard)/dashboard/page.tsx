import OverviewCharts from "@/components/dashboard/overview-charts";
import StatsCard from "@/components/dashboard/stats-card";
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
    </div>
  );
}

export default Home;