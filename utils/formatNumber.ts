// utils/formatNumber.ts
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDecimal = (num: number, decimals: number = 2): string => {
  return parseFloat(num.toFixed(decimals)).toString();
};