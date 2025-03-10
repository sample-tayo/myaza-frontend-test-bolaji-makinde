"use client";
import React, { useState, useCallback, useMemo } from "react";
import { Button } from "@/features/shared/ui/button";
import { cn } from "@/lib/utils";
import { CreditCard } from "./CreditCard";
import {
  USER_CREDIT_CARDS,
  getTotalCardBalance,
  formatCardBalance,
} from "@/mock/dashboard.cards";

const CreditCardWidget = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentCard = useMemo(
    () => USER_CREDIT_CARDS[currentSlide],
    [currentSlide]
  );

  const totalBalance = useMemo(() => getTotalCardBalance(), []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="flex flex-col bg-primary rounded-2xl md:p-6 p-4 shadow mx-auto grow w-full">
      {/* Card header with balance info */}
      <div>
        <h2 className="text-foreground text-lg md:text-2xl font-bold mb-2">
          My Card
        </h2>

        <div className="text-card-foreground mb-1">Card Balance</div>
        <div className="text-foreground text-lg md:text-2xl font-bold mb-6">
          {formatCardBalance(totalBalance)}
        </div>
      </div>

      {/* Credit Card Component */}
      <CreditCard
        balance={currentCard.balance}
        cardNumber={currentCard.cardNumber}
        expiryDate={currentCard.expiryDate}
        brandLogo={currentCard.brandLogo}
        gradientColor={currentCard.color}
      />

      {/* Card Selector Indicators */}
      <div className="flex justify-center mb-6">
        {USER_CREDIT_CARDS.map((card, index) => (
          <button
            key={card.id}
            onClick={() => goToSlide(index)}
            className={cn(
              "size-2 mx-1 rounded-full transition-all duration-300 cursor-pointer",
              currentSlide === index
                ? "bg-primary-foreground w-4"
                : "bg-[#27264E]"
            )}
            aria-label={`View ${
              card.brandName
            } card ending in ${card.cardNumber.slice(-4)}`}
            aria-current={currentSlide === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          className="w-full transition-all duration-300 hover:bg-primary-foreground/90"
          variant={"default"}
          size={"xl"}
        >
          Manage Cards
        </Button>
        <Button
          className="w-full transition-all duration-300 hover:bg-primary/10"
          variant={"outline"}
          size={"xl"}
        >
          Transfer
        </Button>
      </div>
    </div>
  );
};

CreditCardWidget.displayName = "CreditCardWidget";

export { CreditCardWidget };
