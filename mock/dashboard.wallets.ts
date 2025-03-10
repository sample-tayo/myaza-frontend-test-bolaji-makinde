import {
  Wallet,
  WalletCurrency,
} from "@/features/dashboard/components/WalletCards";


export const USER_WALLETS: Wallet[] = [
  {
    id: "wallet-001",
    currency: "USD",
    balance: 345890.88,
    isDefault: true,
  },
  {
    id: "wallet-002",
    currency: "GBP",
    balance: 245890.88,
  },
  {
    id: "wallet-003",
    currency: "NGN",
    balance: 34587254.55,
  },
];


export const getConsolidatedBalance = (): number => {
  return USER_WALLETS.reduce((total, wallet) => total + wallet.balance, 0);
};

export const getUserWallets = () => {
  return {
    wallets: USER_WALLETS,
    consolidatedBalance: getConsolidatedBalance(),
  };
};

export const formatWalletCurrency = (
  amount: number,
  currency: WalletCurrency = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
