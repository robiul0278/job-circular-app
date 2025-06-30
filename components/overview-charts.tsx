'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

const monthlyData = [
  { month: "জানু", circulars: 45, applications: 1200 },
  { month: "ফেব", circulars: 52, applications: 1400 },
  { month: "মার্চ", circulars: 38, applications: 980 },
  { month: "এপ্রিল", circulars: 61, applications: 1650 },
  { month: "মে", circulars: 55, applications: 1520 },
  { month: "জুন", circulars: 67, applications: 1800 },
];

const categoryData = [
  { name: "সরকারি", value: 45, color: "#0EA5E9" },
  { name: "বেসরকারি", value: 35, color: "#10B981" },
  { name: "ব্যাংক", value: 15, color: "#F59E0B" },
  { name: "এনজিও", value: 5, color: "#EF4444" },
];

const recentTrends = [
  { day: "সোমবার", views: 2400 },
  { day: "মঙ্গলবার", views: 1398 },
  { day: "বুধবার", views: 9800 },
  { day: "বৃহস্পতিবার", views: 3908 },
  { day: "শুক্রবার", views: 4800 },
  { day: "শনিবার", views: 3800 },
  { day: "রবিবার", views: 4300 },
];

export default function OverviewCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle className="text-slate-900">মাসিক সার্কুলার ট্রেন্ড</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="month" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="circulars" 
                fill="#0EA5E9" 
                radius={[4, 4, 0, 0]}
                name="সার্কুলার"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">ক্যাটেগরি অনুযায়ী</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-medium text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle className="text-slate-900">সাপ্তাহিক ভিউ ট্রেন্ড</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={recentTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="day" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                name="ভিউ"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}