export type RewardType = 'cashback' | 'points' | 'none';

export interface UserProfile {
  name: string;
  email: string;
  avatarInitials: string;
}

export interface Account {
  id: string;
  accountName: string;
  accountNumber: string; // e.g., "•••• 4821"
  type: 'Checking' | 'Savings' | 'Investment' | 'Credit';
  balance: number;
  currency: string;
  // Account-specific reward structure
  rewardType: RewardType;
  rewardRate?: number;       // e.g. 0.01 for 1% cashback - 2 for 2x points per £1
}

export interface Transaction {
  id: string;
  accountId: string;
  title: string;
  category: 'Groceries' | 'Utilities' | 'Entertainment' | 'Transfer' | 'Income' | 'Shopping';
  amount: number;
  type: 'debit' | 'credit';
  date: string;
  // Per-transaction earned reward (either cashback OR points depending on account)
  cashbackEarned?: number;
  pointsEarned?: number;
}

export interface RewardProgram {
  totalCashbackBalance: number;
  totalPointsBalance: number;
}

export interface StatMetric {
  title: string;
  value: string;
  trend?: string;
  isPositive?: boolean;
}