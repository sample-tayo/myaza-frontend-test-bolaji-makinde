"use client";
import { useState, useCallback, useMemo } from "react";
import { DEFAULT_METRICS, getMetricsData } from "@/mock";
import { TimePeriod, getActivityData } from "@/mock/dashboard.activity";
import { StatCardProps } from "../features/dashboard/components/StatsCard";

/**
 * Custom hook for managing dashboard state and data
 */
export function useDashboard() {
  // Selected time period for filtering data
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("month");

  // User metrics data
  const metrics = useMemo(() => DEFAULT_METRICS, []);

  // Activity data based on selected time period
  const activityData = useMemo(() => getActivityData(timePeriod), [timePeriod]);

  // Handle time period change
  const handlePeriodChange = useCallback((period: TimePeriod) => {
    setTimePeriod(period);
  }, []);

  // Custom metrics with period-specific data
  const customizeMetrics = useCallback(
    (customData: Partial<StatCardProps>[]) => {
      return getMetricsData(customData);
    },
    []
  );

  return {
    timePeriod,
    metrics,
    activityData,
    handlePeriodChange,
    customizeMetrics,
  };
}
