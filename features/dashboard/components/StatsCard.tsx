import React from "react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/formatters";

export interface StatCardProps {
  title: string;
  amount: number;
  percentage: number;
  isPositive: boolean;
  icon: React.ReactNode;
  bgColor: string;
  className?: string;
}

export interface StatsCardsProps {
  metrics: StatCardProps[];
  className?: string;
}

/**
 * StatsCard - A single card showing a metric with its percentage change
 */
export const StatsCard: React.FC<StatCardProps> = ({
  title,
  amount,
  percentage,
  isPositive,
  icon,
  bgColor,
  className,
}) => {
  return (
    <div className={cn("bg-primary rounded-2xl lg:p-4 p-3 shadow", className)}>
      <div className="flex items-center justify-between">
        <div className="text-xl md:text-2xl text-white font-bold">
          {formatCurrency(amount)}
        </div>

        <div
          className={cn(
            "rounded-lg flex items-center justify-center w-10 h-10",
            bgColor
          )}
        >
          {icon}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center gap-1 text-sm">
          <span
            className={cn(
              "text-xs font-medium",
              isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            {isPositive ? "+" : "-"}
            {percentage}%
          </span>
          <div
            className={cn(
              "size-4",
              isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            {isPositive ? "↑" : "↓"}
          </div>
        </div>
        <div className="text-foreground text-sm">{title}</div>
      </div>
    </div>
  );
};

/**
 * StatsCards - A grid of stat cards
 */
export const StatsCards: React.FC<StatsCardsProps> = ({
  metrics,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full",
        className
      )}
    >
      {metrics.map((metric, index) => (
        <StatsCard key={index} {...metric} />
      ))}
    </div>
  );
};
