"use client";
import { useState, useCallback, useMemo } from "react";
import { Button } from "@/features/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/features/shared/ui";
import { Card, CardContent, CardHeader } from "@/features/shared/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/features/shared/ui";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { TimePeriod, getActivityData } from "@/mock/dashboard.activity";
import { cn } from "@/lib/utils";

/**
 * Chart configuration for the RadialBarChart
 */
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
  mid: {
    label: "mid",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function ActivityChart() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("month");

  const { chartData, dataPoints } = useMemo(
    () => getActivityData(selectedPeriod),
    [selectedPeriod]
  );

  const totalPercentage = useMemo(
    () => chartData.reduce((acc, item) => acc + item.value, 0),
    [chartData]
  );

  const handlePeriodChange = useCallback((value: string) => {
    setSelectedPeriod(value as TimePeriod);
  }, []);

  return (
    <Card className="w-full rounded-lg bg-primary md:p-6 p-4 border-none text-foreground justify-between grow">
      <CardHeader className="px-0">
        <div className="mb-6 flex w-full items-center justify-between">
          <h2 className="text-lg md:text-2xl font-semibold">Activity</h2>
          <Select value={selectedPeriod} onValueChange={handlePeriodChange}>
            <SelectTrigger className="h-8 w-24 px-2 border border-card-foreground bg-transparent text-card-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2440] text-foreground">
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between grow">
        <ChartContainer
          config={chartConfig}
          className="grow min-h-44 md:min-h-auto"
        >
          <RadialBarChart
            data={dataPoints}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
            reverseStackOrder
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px] bg-chart-3 p-2"
                  cursor
                />
              }
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalPercentage}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              order={2}
              dataKey="Daily Payment"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
              animationDuration={750}
            />
            <RadialBar
              order={3}
              dataKey="Hobby"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
              animationDuration={750}
            />
            <RadialBar
              order={1}
              dataKey="Others"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-mid)"
              className="stroke-transparent stroke-2"
              animationDuration={750}
            />
          </RadialBarChart>
        </ChartContainer>

        <div className="flex justify-between items-center -mt-20">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded-full", item.color)}></div>
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
        <div className="my-2">
          <Button className="w-full" variant={"outline"} size={"xl"}>
            See All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
