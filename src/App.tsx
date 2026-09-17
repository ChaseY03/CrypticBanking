import { LayoutContainer } from './components/layout/LayoutContainer';
import { NetCard } from './components/account/NetCard';
import { OverviewCard } from './components/account/OverviewCard';
import { RewardCard } from './components/account/RewardCard';
import { SpendingCard } from './components/stats/SpendingCard';
import { TransactionTable } from './components/transactions/TransactionTable';
import { mockAccounts, mockTransactions, mockRewards } from './data/mockData';

export default function App() {
  return (
    <LayoutContainer>
      <div className="space-y-6">
        {/* Top Hero Section: Dynamic Net Worth & Aggregate Rewards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <NetCard accounts={mockAccounts} />
          </div>
          <div className="lg:col-span-2">
            <RewardCard rewards={mockRewards} />
          </div>
        </div>

        {/* Linked Accounts Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Your Accounts</h2>
            <span className="text-xs font-semibold text-slate-500">
              {mockAccounts.length} Linked Accounts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockAccounts.map((account) => (
              <OverviewCard key={account.id} account={account} />
            ))}
          </div>
        </div>

        {/* Analytics & Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionTable transactions={mockTransactions} />
          </div>
          <div className="lg:col-span-1">
            <SpendingCard transactions={mockTransactions} />
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}