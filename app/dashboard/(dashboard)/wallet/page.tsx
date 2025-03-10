import { PageHeader } from "@/features/layout/components/PageHeader";
import { WalletCards } from "@/features";
import { RecentTransactionsTable } from "@/features";
import { transactions, USER_WALLETS } from "@/mock";

const WALLET_HEADING = {
  title: "My wallets",
  subtitle: "Manage all your wallets from here",
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-[1440px] overflow-x-hidden">
      <PageHeader
        title={WALLET_HEADING.title}
        subtitle={WALLET_HEADING.subtitle}
      />
      <div className="w-full flex flex-col gap-4 py-6">
        <WalletCards consolidatedBalance={1000} wallets={USER_WALLETS} />
        <RecentTransactionsTable showDescription transactions={transactions} />
      </div>
    </div>
  );
}
