import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

export default function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  trendValue,
  className 
}: StatsCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 " />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold pb-2">{value}</div>
        {description && (
          <p className="text-xs  mt-1">{description}</p>
        )}
        {trend && trendValue && (
          <div className="flex items-center mt-2 text-xs">
            <span className={cn(
              "font-medium",
              trend === "up" ? "text-green-600" : 
              trend === "down" ? "text-red-600" : "text-slate-600"
            )}>
              {trendValue}
            </span>
            <span className="text-slate-500 ml-1">গত সপ্তাহ থেকে</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}