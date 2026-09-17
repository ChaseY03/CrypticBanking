import React from 'react';
import { Award, Percent, Gift } from 'lucide-react';
import type { RewardProgram } from '../../types/index';

interface RewardCardProps {
  rewards: RewardProgram;
}

export const RewardCard: React.FC<RewardCardProps> = ({ rewards }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
            <Gift className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Active Rewards Overview</h3>
        </div>
        <button className="text-xs text-red-600 font-semibold hover:underline bg-transparent border-0 p-0 cursor-pointer">
          Redeem Rewards
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Cashback Summary */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Percent className="w-3.5 h-3.5 text-emerald-600" />
              Cashback Balance
            </p>
            <p className="text-xl font-extrabold text-slate-900 mt-1">
              £{rewards.totalCashbackBalance.toFixed(2)}
            </p>
          </div>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-lg">
            Auto-redeem off
          </span>
        </div>

        {/* Points Summary */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              Reward Points
            </p>
            <p className="text-xl font-extrabold text-slate-900 mt-1">
              {rewards.totalPointsBalance.toLocaleString()} pts
            </p>
          </div>
          <span className="text-[11px] font-medium text-amber-700 bg-amber-100/60 px-2.5 py-1 rounded-lg">
            ~ £{(rewards.totalPointsBalance * 0.005).toFixed(2)} value
          </span>
        </div>
      </div>
    </div>
  );
};