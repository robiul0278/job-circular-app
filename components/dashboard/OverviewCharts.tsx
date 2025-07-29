'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categoryToBangla } from "@/utils/utils";
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";


const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#ffbb28', '#0088fe'];
type TCategories = {
  _id: string;
  count: number;
}
export default function OverviewCharts({monthlyTrend,categoryWiseCount}: {monthlyTrend:TCategories[]; categoryWiseCount: TCategories[] }) {


  // Transform data
const monthlyData = monthlyTrend.map((item: TCategories) => ({
  month: format(new Date(`${item._id}-01`), 'MMMM yyyy', { locale: bn }),
  circulars: item.count,
}));

  return (
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {/* Card 1 */}

  {/* Card 2 */}
<Card className="w-full">
  <CardHeader>
    <CardTitle>মাসিক সার্কুলার ট্রেন্ড</CardTitle>
  </CardHeader>
  <CardContent>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
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


  {/* Card 3 */}
<Card className="w-full shadow-sm border">
  <CardHeader>
    <CardTitle>ক্যাটেগরি অনুযায়ী</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Pie Chart */}
      <div className="w-full md:w-1/2">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryWiseCount.map((item:TCategories) => ({
                name: item._id,
                value: item.count,
              }))}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
              nameKey="name"
            >
              {categoryWiseCount.map((_: TCategories, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="w-full md:w-1/2 space-y-4">
        {categoryWiseCount.map((item: TCategories, index: number) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-3"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="font-medium">{categoryToBangla(item._id)}</span>
            </div>
            <span className="font-semibold">{item.count} টি</span>
          </div>
        ))}
      </div>
    </div>
  </CardContent>
</Card>

</div>

  );
}
