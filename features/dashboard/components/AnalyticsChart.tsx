"use client";

import { useState, useCallback, useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/features/shared/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/features/shared/ui";
import { Card, CardContent, CardHeader } from "@/features/shared/ui/card";
import {
  ANALYTICS_CONFIG,
  AnalyticsYear,
  formatAmount,
  getAnalyticsData,
} from "@/mock/dashboard.analytics";
import { cn } from "@/lib/utils";

export function AnalyticsChart() {
  const [selectedYear, setSelectedYear] = useState<AnalyticsYear>("2023");
  const chartData = useMemo(
    () => getAnalyticsData(selectedYear),
    [selectedYear]
  );

  const amountFormatter = useCallback((tick: number) => {
    return formatAmount(tick);
  }, []);

  const handleYearChange = useCallback((year: string) => {
    setSelectedYear(year as AnalyticsYear);
  }, []);

  return (
    <Card className="w-full rounded-lg bg-primary md:p-6 p-4 border-none text-foreground grow justify-between">
      <CardHeader className="px-0">
        <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <h2 className="text-lg md:text-2xl font-semibold">Analytics</h2>
          <div className="flex w-full md:w-auto justify-between items-center gap-4">
            {/* Legend */}
            <div className="flex items-center gap-4">
              <LegendItem color="bg-chart-2" label="Income" />
              <LegendItem color="bg-chart-1" label="Outcome" />
            </div>

            {/* Year Selector */}
            <Select value={selectedYear} onValueChange={handleYearChange}>
              <SelectTrigger className="h-8 w-20 px-2 border border-card-foreground bg-transparent text-card-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2440] text-foreground">
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={ANALYTICS_CONFIG}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 25, bottom: 5, left: 0 }}
            barGap={0}
            className="analytics-chart"
          >
            <CartesianGrid strokeDasharray="3" vertical={false} />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              padding={{ left: 20, right: 20 }}
              tick={{ fill: "text-card-foreground", fontSize: 12 }}
              className="fill-card-foreground"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              ticks={[10000, 20000, 30000, 40000, 50000]}
              tick={{
                fill: "fill-card-foreground",
                fontSize: 12,
                textAnchor: "end",
              }}
              tickFormatter={amountFormatter}
              domain={[10000, "auto"]}
            />
            <Bar
              dataKey="outcome"
              fill="var(--color-outcome)"
              radius={[4, 4, 0, 0]}
              maxBarSize={5}
              animationDuration={750}
            />
            <Bar
              dataKey="income"
              fill="var(--color-income)"
              radius={[4, 4, 0, 0]}
              maxBarSize={5}
              animationDuration={750}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => (
                    <div className="flex items-baseline gap-1 font-medium">
                      $
                      {Number(value).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  )}
                  labelFormatter={(label) => (
                    <div className="font-medium text-foreground">
                      {label} {selectedYear}
                    </div>
                  )}
                  className="rounded-md border-none bg-chart-3 p-3 text-foreground shadow-md"
                />
              }
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

/**
 * Legend item component for chart legend
 */
interface LegendItemProps {
  color: string;
  label: string;
}

function LegendItem({ color, label }: LegendItemProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn("h-3 w-3 rounded-full", color)}></span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
