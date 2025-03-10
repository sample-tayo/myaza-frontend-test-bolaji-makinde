export interface ActivityItem {
  name: string;
  value: number;
  color: string;
}

export interface ActivityDataPoint {
  period: string;
  "Daily Payment": number;
  Hobby: number;
  Others: number;
}

export type TimePeriod = "week" | "month" | "year";

/**
 * Activity data organized by time period
 */
export const ACTIVITY_DATA: Record<
  TimePeriod,
  {
    chartData: ActivityItem[];
    dataPoints: ActivityDataPoint[];
  }
> = {
  week: {
    chartData: [
      { name: "Daily payment", value: 42, color: "bg-[#7B5CF5]" },
      { name: "Hobby", value: 33, color: "bg-[#5ECFEA]" },
    ],
    dataPoints: [
      { period: "current", "Daily Payment": 42, Hobby: 33, Others: 25 },
    ],
  },
  month: {
    chartData: [
      { name: "Daily payment", value: 55, color: "bg-[#7B5CF5]" },
      { name: "Hobby", value: 20, color: "bg-[#5ECFEA]" },
    ],
    dataPoints: [
      { period: "current", "Daily Payment": 55, Hobby: 20, Others: 25 },
    ],
  },
  year: {
    chartData: [
      { name: "Daily payment", value: 65, color: "bg-[#7B5CF5]" },
      { name: "Hobby", value: 15, color: "bg-[#5ECFEA]" },
    ],
    dataPoints: [
      { period: "current", "Daily Payment": 65, Hobby: 15, Others: 20 },
    ],
  },
};

/**
 * Get activity data for a specific time period
 * @param period - The time period to get data for
 * @returns The activity data for the specified period
 */
export const getActivityData = (period: TimePeriod = "month") => {
  return ACTIVITY_DATA[period];
};
