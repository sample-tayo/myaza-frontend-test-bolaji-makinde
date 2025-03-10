export const formatCurrency = (
  value: number,
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (
  value: number,
  decimals: number = 2
): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

export const formatNumber = (
  value: number,
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale).format(value);
};
