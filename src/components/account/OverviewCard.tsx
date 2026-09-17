import React from 'react';
import { CreditCard, ArrowUpRight, Award, Percent } from 'lucide-react';
import type { Account } from '../../types/index';

interface OverviewCardProps {
  account: Account;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({ account }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">{account.accountName}</h4>
            <p className="text-xs text-slate-400 font-mono">•••• {account.accountNumber.slice(-4)}</p>
          </div>
        </div>
        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md capitalize">
          {account.type}
        </span>
      </div>

      <div>
        <p className="text-2xl font-extrabold text-slate-900">
          £{account.balance.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        {account.rewardType === 'cashback' && (
          <span className="text-emerald-600 font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md">
            <Percent className="w-3.5 h-3.5" /> {account.rewardRate}% Cashback
          </span>
        )}
        {account.rewardType === 'points' && (
          <span className="text-amber-600 font-semibold flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md">
            <Award className="w-3.5 h-3.5" /> {account.rewardRate}x Points
          </span>
        )}
        {!account.rewardType && (
          <span className="text-slate-400">Standard Account</span>
        )}

        <button className="text-red-600 font-semibold hover:underline flex items-center gap-0.5 bg-transparent border-0 p-0 cursor-pointer">
          Details <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};