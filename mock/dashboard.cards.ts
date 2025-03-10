import { StaticImageData } from "next/image";
import VISA_LOGO from "@/public/assets/logos/visa-logo.png";
import MASTERCARD_LOGO from "@/public/assets/logos/mastercard-logo.png";

/**
 * Credit card data types
 */
export interface CreditCardData {
  id: string;
  cardHolder: string;
  balance: number;
  currentBalance: number;
  cardNumber: string;
  expiryDate: string;
  brandName: "visa" | "mastercard" | "amex";
  brandLogo?: StaticImageData;
  color?: string;
}

/**
 * Credit card brand configuration
 */
export const CARD_BRANDS = {
  visa: {
    name: "visa",
    logo: VISA_LOGO,
    color: "from-[#9C2CF3] to-[#3A6FF9]",
  },
  mastercard: {
    name: "mastercard",
    logo: MASTERCARD_LOGO,
    color: "from-[#6359E9] to-[#5ECFEA]",
  },
  amex: {
    name: "amex",
    logo: MASTERCARD_LOGO, // Replace with actual AMEX logo
    color: "from-[#2C5CF3] to-[#6A3AF9]",
  },
};

/**
 * User's credit cards data
 */
export const USER_CREDIT_CARDS: CreditCardData[] = [
  {
    id: "card-1",
    cardHolder: "Ali Riaz",
    balance: 5750.2,
    currentBalance: 4250.8,
    cardNumber: "5282 3456 7890 1289",
    expiryDate: "09/25",
    brandName: "mastercard",
    brandLogo: MASTERCARD_LOGO,
    color: "from-[#9C2CF3] to-[#3A6FF9]",
  },
  {
    id: "card-2",
    cardHolder: "Ali Riaz",
    balance: 3200.5,
    currentBalance: 2800.25,
    cardNumber: "4539 8765 4321 9876",
    expiryDate: "11/24",
    brandName: "visa",
    brandLogo: VISA_LOGO,
    color: "from-[#6359E9] to-[#5ECFEA]",
  },
  {
    id: "card-3",
    cardHolder: "Ali Riaz",
    balance: 10500.0,
    currentBalance: 8500.0,
    cardNumber: "6011 2233 4455 6677",
    expiryDate: "07/26",
    brandName: "mastercard",
    brandLogo: MASTERCARD_LOGO,
    color: "from-[#2C5CF3] to-[#6A3AF9]",
  },
];

/**
 * Get the total balance of all credit cards
 * @returns The total balance of all credit cards
 */
export const getTotalCardBalance = (): number => {
  return USER_CREDIT_CARDS.reduce((total, card) => total + card.balance, 0);
};

/**
 * Format currency for display
 * @param amount - The amount to format
 * @returns Formatted amount string with $ sign
 */
export const formatCardBalance = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
