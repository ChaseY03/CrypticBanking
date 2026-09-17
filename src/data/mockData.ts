import type { UserProfile, Account, Transaction, RewardProgram } from '../types/index';

export const mockUser: UserProfile = {
    name: 'Chase Yang',
    email: 'yang@example.com',
    avatarInitials: 'CY',
};


export const mockAccounts: Account[] = [
    {
        id: 'acc-1',
        accountName: 'Everyday Cashback Checking',
        accountNumber: '•••• 4821',
        type: 'Checking',
        balance: 5420.50,
        currency: '£',
        rewardType: 'cashback',
        rewardRate: 0.01, // 1% Cashback
    },
    {
        id: 'acc-2',
        accountName: 'High-Yield Savings',
        accountNumber: '•••• 8912',
        type: 'Savings',
        balance: 18250.00,
        currency: '£',
        rewardType: 'none', // Savings account doesn't earn rewards
    },
    {
        id: 'acc-3',
        accountName: 'Rewards Credit Card',
        accountNumber: '•••• 3049',
        type: 'Credit',
        balance: -420.10,
        currency: '£',
        rewardType: 'points',
        rewardRate: 2, // 2x Points per £1 spent
    },
    {
        id: 'acc-4',
        accountName: 'Travel Rewards Card',
        accountNumber: '9988776655441234',
        balance: -150.00,
        currency: '£',
        type: 'Credit',
        rewardType: 'points',
        rewardRate: 3
    }
];

export const mockRewards: RewardProgram = {
    totalCashbackBalance: 38.40, // Sum of cashback across cashback accounts
    totalPointsBalance: 8250,     // Sum of points across points accounts
};

export const mockTransactions: Transaction[] = [
    {
        id: 'tx-1',
        accountId: 'acc-1', // Earns Cashback
        title: 'Sainsbury\'s Supermarket',
        category: 'Groceries',
        amount: 64.20,
        type: 'debit',
        date: '2026-09-16',
        cashbackEarned: 0.64,
    },
    {
        id: 'tx-2',
        accountId: 'acc-1',
        title: 'BACS Salary',
        category: 'Income',
        amount: 2850.00,
        type: 'credit',
        date: '2026-09-15',
    },
    {
        id: 'tx-3',
        accountId: 'acc-3', // Earns Points
        title: 'Steam Games',
        category: 'Entertainment',
        amount: 45.00,
        type: 'debit',
        date: '2026-09-14',
        pointsEarned: 90,
    },
    {
        id: 'tx-4',
        accountId: 'acc-1',
        title: 'Octopus Energy',
        category: 'Utilities',
        amount: 112.50,
        type: 'debit',
        date: '2026-09-12',
        cashbackEarned: 1.12,
    },
];