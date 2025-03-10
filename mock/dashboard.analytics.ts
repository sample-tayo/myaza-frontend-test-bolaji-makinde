/**
 * Analytics chart data types
 */
export interface AnalyticsDataPoint {
  month: string;
  income: number;
  outcome: number;
}

export type AnalyticsYear = "2020" | "2021" | "2022" | "2023";

/**
 * Chart configuration for the analytics chart
 */
export const ANALYTICS_CONFIG = {
  income: {
    label: "Income",
    color: "var(--chart-2)",
  },
  outcome: {
    label: "Outcome",
    color: "var(--chart-1)",
  },
};

/**
 * Analytics data organized by year
 */
export const ANALYTICS_DATA: Record<AnalyticsYear, AnalyticsDataPoint[]> = {
  "2020": [
    { month: "Jan", income: 37000, outcome: 25000 },
    { month: "Feb", income: 25000, outcome: 32000 },
    { month: "Mar", income: 41000, outcome: 22000 },
    { month: "Apr", income: 38000, outcome: 28000 },
    { month: "May", income: 32000, outcome: 35000 },
    { month: "Jun", income: 25000, outcome: 22000 },
    { month: "Jul", income: 22000, outcome: 28000 },
    { month: "Aug", income: 20000, outcome: 25000 },
  ],
  "2021": [
    { month: "Jan", income: 42000, outcome: 28000 },
    { month: "Feb", income: 30000, outcome: 35000 },
    { month: "Mar", income: 45000, outcome: 26000 },
    { month: "Apr", income: 41000, outcome: 30000 },
    { month: "May", income: 35000, outcome: 38000 },
    { month: "Jun", income: 30000, outcome: 25000 },
    { month: "Jul", income: 26000, outcome: 30000 },
    { month: "Aug", income: 24000, outcome: 28000 },
  ],
  "2022": [
    { month: "Jan", income: 45000, outcome: 30000 },
    { month: "Feb", income: 35000, outcome: 38000 },
    { month: "Mar", income: 48000, outcome: 28000 },
    { month: "Apr", income: 44000, outcome: 32000 },
    { month: "May", income: 38000, outcome: 40000 },
    { month: "Jun", income: 33000, outcome: 27000 },
    { month: "Jul", income: 28000, outcome: 32000 },
    { month: "Aug", income: 26000, outcome: 30000 },
  ],
  "2023": [
    { month: "Jan", income: 48000, outcome: 32000 },
    { month: "Feb", income: 38000, outcome: 40000 },
    { month: "Mar", income: 52000, outcome: 30000 },
    { month: "Apr", income: 47000, outcome: 34000 },
    { month: "May", income: 42000, outcome: 42000 },
    { month: "Jun", income: 36000, outcome: 29000 },
    { month: "Jul", income: 31000, outcome: 34000 },
    { month: "Aug", income: 28000, outcome: 32000 },
  ],
};

/**
 * Get analytics data for a specific year
 * @param year - The year to get data for
 * @returns The analytics data for the specified year
 */
export const getAnalyticsData = (
  year: AnalyticsYear = "2023"
): AnalyticsDataPoint[] => {
  return ANALYTICS_DATA[year];
};

/**
 * Format amount to display in readable format
 * @param amount - The amount to format
 * @returns Formatted amount string (e.g., "$25k")
 */
export const formatAmount = (amount: number): string => {
  const value = amount / 1000;
  return `$${value}k`;
};
