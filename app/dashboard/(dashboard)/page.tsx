import {
  AnalyticsChart,
  StatsCards,
  CreditCardWidget,
  ActivityChart,
  RecentTransactionsTable,
} from "@/features/dashboard";
import { PageHeader } from "@/features/layout/components/PageHeader";
import { DEFAULT_METRICS, transactions } from "@/mock";

const DASHBOARD_WELCOME = {
  title: "Welcome Back, Ali 👋",
  subtitle: "Here's what's happening with your store today.",
};

export default function Page() {
  return (
    <div className="mx-auto w-full">
      <PageHeader
        title={DASHBOARD_WELCOME.title}
        subtitle={DASHBOARD_WELCOME.subtitle}
      />

      <div className="py-4 w-full">
        <div className="flex flex-col gap-4 w-full">
          {/* Top Row: Stats & Analytics / Credit Card */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full flex flex-[1.28] flex-col gap-4">
              <StatsCards metrics={DEFAULT_METRICS} />
              <AnalyticsChart />
            </div>
            <div className="w-full flex-col flex-1 flex">
              <CreditCardWidget />
            </div>
          </div>

          {/* Bottom Row: Transactions / Activity */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full flex flex-[1.28] flex-col gap-4">
              <RecentTransactionsTable transactions={transactions} />
            </div>
            <div className="w-full flex-col flex-1 flex">
              <ActivityChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
