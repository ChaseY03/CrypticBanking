import React from 'react';
import { TrendingUp, CreditCard, ShieldCheck } from 'lucide-react';
import type { Account } from '../../types/index';

interface NetCardProps {
  accounts: Account[];
}

export const NetCard: React.FC<NetCardProps> = ({ accounts }) => {
  const totalBalance = React.useMemo(() => {
    return accounts.reduce((sum, acc) => sum + acc.balance, 0);
  }, [accounts]);

  return (
    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-full relative overflow-hidden">
      <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl pointer-events-none" />
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Total Net Balance
          </span>
          <span className="text-xs bg-emerald-500/10 text-emerald-400 font-semibold px-2.5 py-1 rounded-lg border border-emerald-500/20 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +4.2%
          </span>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            £{totalBalance.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
          <p className="text-xs text-slate-400 mt-1">Aggregated across all linked accounts</p>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <CreditCard className="w-4 h-4 text-red-400" /> {accounts.length} Active Accounts
        </span>
        <span className="text-red-400 hover:text-red-300 font-medium cursor-pointer transition-colors">
          Manage Accounts &rarr;
        </span>
      </div>
    </div>
  );
};