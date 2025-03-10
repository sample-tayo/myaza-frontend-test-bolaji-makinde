import { MoveDownRight, MoveUpRight } from "lucide-react";
import { StatCardProps } from "@/features/dashboard/components/StatsCard";

export const DEFAULT_METRICS: StatCardProps[] = [
  {
    title: "Total Income",
    amount: 632000,
    percentage: 1.29,
    isPositive: true,
    bgColor: "bg-[#64CFF6]",
    icon: <MoveDownRight />,
  },
  {
    title: "Total Outcome",
    amount: 632000,
    percentage: 1.29,
    isPositive: false,
    bgColor: "bg-[#6359E9]",
    icon: <MoveUpRight />,
  },
];

export const getMetricsData = (customMetrics?: Partial<StatCardProps>[]) => {
  if (!customMetrics) {
    return DEFAULT_METRICS;
  }

  return DEFAULT_METRICS.map((defaultMetric, index) => {
    const customMetric = customMetrics[index] || {};
    return {
      ...defaultMetric,
      ...customMetric,
    };
  });
};
