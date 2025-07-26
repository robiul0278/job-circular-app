"use client"

import OverviewCharts from "@/components/dashboard/OverviewCharts";
import StatsCard from "@/components/dashboard/StatsCard";
import { useAnalyticsQuery } from "@/redux/api/api";
import {
  FileText,
  Clock,
  AlertTriangle,
  Eye,
  Loader,
} from "lucide-react";

const Home = () => {
  const { data: analytics, isLoading, isError } = useAnalyticsQuery(undefined);



  if (isLoading) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Loader />
      <p className="text-sm text-muted-foreground">Analytics বিস্তারিত লোড হচ্ছে...</p>
    </div>

  );
  if (isError) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <p className="text-red-500">Failed to load Analytics details.</p>;
    </div>
  );

  const {
    totalCirculars,
    ongoingCirculars,
    nearDeadlineCirculars,
    totalViews,
    // monthlyTrend,
    // categoryWiseCount,
    // weeklyTrend,
  } = analytics.data;

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
          value={totalCirculars}
          description="সর্বমোট প্রকাশিত সার্কুলার"
          icon={FileText}
          trend="up"
          className="xl:col-span-2"
        />
        <StatsCard
          title="চলমান সার্কুলার"
          value={ongoingCirculars}
          description="বর্তমানে সক্রিয় সার্কুলার"
          icon={Clock}
          trend="neutral"
          className="xl:col-span-1"
        />

        <StatsCard
          title="ডেডলাইনের কাছাকাছি"
          value={nearDeadlineCirculars}
          description="৭ দিনের মধ্যে শেষ হবে"
          icon={AlertTriangle}
          trend="down"
          className="xl:col-span-1"
        />

        <StatsCard
          title="মোট ভিউ"
          value={totalViews}
          description="সর্বাধিক ভিউ"
          icon={Eye}
          trend="up"
          className="xl:col-span-1"
        />
      </div>
      <OverviewCharts />
    </div>
  );
}

export default Home;