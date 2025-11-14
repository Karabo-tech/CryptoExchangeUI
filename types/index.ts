// types/index.ts
export interface BalanceCardProps {
  icon: any;
  symbol: string;
  balance: number;
  usdBalance: number;
  isSelected: boolean;
}

export interface FeeRowProps {
  label: string;
  value: number;
  isUsd?: boolean;
  isGreen?: boolean;
}