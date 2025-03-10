"use client";
import { memo } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import MASTERCARD_LOGO from "@/public/assets/logos/mastercard-logo.png";
import { formatCardBalance } from "@/mock/dashboard.cards";

/**
 * Props for the CreditCard component
 */
interface CreditCardProps {
  balance: number;
  cardNumber: string;
  expiryDate: string;
  brandLogo?: StaticImageData;
  gradientColor?: string;
  className?: string;
}

const CreditCard = memo(
  ({
    balance,
    cardNumber,
    expiryDate,
    brandLogo = MASTERCARD_LOGO,
    gradientColor = "from-[#9C2CF3] to-[#3A6FF9]",
    className,
  }: CreditCardProps) => {
    const formatCardNumber = (number: string) => {
      return (
        number
          .replace(/\s/g, "")
          .match(/.{1,4}/g)
          ?.join(" ") || number
      );
    };

    const formattedBalance = formatCardBalance(balance);

    return (
      <div
        className={cn(
          "grow overflow-hidden relative shadow flex flex-col justify-between h-[200px]",
          "bg-gradient-to-br rounded-2xl p-4 sm:p-8 mb-6",
          gradientColor,
          className
        )}
        data-testid="credit-card"
      >
        {/* Background wave pattern - decorative element */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-3/5 -left-14 h-56 w-60 bg-black/50 rounded-full transform scale-x-150"></div>
          <div className="absolute -top-3/5 -right-20 h-56 w-60 bg-black/50 rounded-full transform scale-x-150"></div>
        </div>

        {/* Card top section: balance and logo */}
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <div className="text-foreground/80 text-sm mb-1">
              Current Balance
            </div>
            <div className="text-foreground text-3xl font-medium">
              {formattedBalance}
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center max-w-28 items-center">
              <Image
                alt="Card Brand Logo"
                src={brandLogo}
                className="w-full object-contain transition-opacity duration-300 hover:opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Card bottom section: card number and expiry */}
        <div className="flex justify-between items-center relative z-10">
          <div className="text-foreground tracking-wider">
            {formatCardNumber(cardNumber)}
          </div>
          <div className="text-foreground">{expiryDate}</div>
        </div>
      </div>
    );
  }
);

CreditCard.displayName = "CreditCard";

export { CreditCard };
