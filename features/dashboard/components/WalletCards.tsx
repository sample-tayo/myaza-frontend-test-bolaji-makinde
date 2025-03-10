"use client";

import { memo, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/features/shared/ui/button";
import { Ellipsis, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

import NGN_FLAG from "@/public/assets/flags/ngn-flag.png";
import GB_FLAG from "@/public/assets/flags/gb-flag.png";
import US_FLAG from "@/public/assets/flags/us-flag.png";

export type WalletCurrency = "NGN" | "GBP" | "USD";

export interface Wallet {
  id: string;
  currency: WalletCurrency;
  balance: number;
  isDefault?: boolean;
}

/**
 * Props for the WalletCards component
 */
interface WalletCardsProps {
  consolidatedBalance: number;
  wallets: Wallet[];
  className?: string;
}

/**
 * Component to display wallet cards with balances
 */
const WalletCards = memo(
  ({ consolidatedBalance, wallets, className }: WalletCardsProps) => {
    const formatCurrencyDisplay = useCallback(
      (amount: number, currency: WalletCurrency = "USD"): string => {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(amount);
      },
      []
    );

    const getCurrencyFlag = useCallback((currency: WalletCurrency) => {
      switch (currency) {
        case "NGN":
          return NGN_FLAG;
        case "GBP":
          return GB_FLAG;
        case "USD":
          return US_FLAG;
        default:
          return US_FLAG;
      }
    }, []);

    const handleAddWallet = useCallback(() => {
      console.log("Adding new wallet");
    }, []);

    const handleMoreOptions = useCallback(() => {
      console.log("Showing more options");
    }, []);

    return (
      <div className={cn("bg-primary p-6 rounded-2xl", className)}>
        {/* Header section with balance and actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-8 w-full">
          <div>
            <p className="text-muted-foreground text-sm mb-1">
              Your consolidated balance
            </p>
            <h2 className="text-foreground text-3xl font-bold">
              {formatCurrencyDisplay(consolidatedBalance, "USD")}
            </h2>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-2">
            <Button
              onClick={handleAddWallet}
              className="w-full max-w-52 md:max-w-96 transition-all duration-300"
              variant="default"
              size="lg"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New Wallet
            </Button>

            <Button
              onClick={handleMoreOptions}
              variant="outline"
              size="icon"
              className="rounded-full size-6 flex items-center justify-center transition-all duration-200 hover:bg-primary-foreground/10"
              aria-label="More options"
            >
              <Ellipsis className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Wallet cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          {wallets.map((wallet) => (
            <div
              key={wallet.id}
              className={cn(
                "border border-[#8477FF]/50 p-4 rounded-xl",
                "hover:border-[#8477FF] hover:shadow-sm",
                "transition-all duration-300 cursor-pointer",
                wallet.isDefault && "bg-[#8477FF]/10"
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 flex items-center justify-center relative rounded-full bg-background/5 p-1">
                  <Image
                    src={getCurrencyFlag(wallet.currency)}
                    alt={`${wallet.currency} flag`}
                    width={30}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span className="text-foreground font-medium">
                  {wallet.currency} Wallet
                  {wallet.isDefault && (
                    <span className="ml-2 text-xs text-primary-foreground/60">
                      (Default)
                    </span>
                  )}
                </span>
              </div>
              <p className="text-muted-foreground text-sm pl-12">
                Balance:{" "}
                {formatCurrencyDisplay(wallet.balance, wallet.currency)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

WalletCards.displayName = "WalletCards";

export { WalletCards };
