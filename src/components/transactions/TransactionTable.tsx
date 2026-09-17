import React from 'react';
import { ArrowUpRight, ArrowDownLeft, ShoppingBag, Coffee, Car, Utensils } from 'lucide-react';
import type { Transaction } from '../../types/index';

interface TransactionTableProps {
    transactions: Transaction[];
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Shopping': return <ShoppingBag className="w-4 h-4" />;
    case 'Groceries': return <Coffee className="w-4 h-4" />;
    case 'Entertainment': return <Utensils className="w-4 h-4" />;
    case 'Utilities': case 'Transfer': case 'Income': return <Car className="w-4 h-4" />;
    default: return <ShoppingBag className="w-4 h-4" />;
  }
};

export const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm">Recent Activity</h3>
                <span className="text-xs text-red-600 font-semibold cursor-pointer hover:underline">
                    View All
                </span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-3.5">Transaction</th>
                            <th className="px-6 py-3.5">Category</th>
                            <th className="px-6 py-3.5">Date</th>
                            <th className="px-6 py-3.5">Rewards Earned</th>
                            <th className="px-6 py-3.5 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        {transactions.map((tx) => {
                            const isCredit = tx.amount > 0;
                            return (
                                <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-6 py-4 flex items-center gap-3">
                                        <div className={`p-2 rounded-xl ${isCredit ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
                                            {isCredit ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">{tx.title}</p>
                                            <p className="text-[11px] text-slate-400 font-mono">{tx.accountId}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                                            {getCategoryIcon(tx.category)}
                                            {tx.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">{tx.date}</td>
                                    <td className="px-6 py-4">
                                        {tx.cashbackEarned ? (
                                            <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg font-semibold border border-emerald-200/60">
                                                +£{tx.cashbackEarned.toFixed(2)}
                                            </span>
                                        ) : tx.pointsEarned ? (
                                            <span className="text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg font-semibold border border-amber-200/60">
                                                +{tx.pointsEarned} pts
                                            </span>
                                        ) : (
                                            <span className="text-slate-400">—</span>
                                        )}
                                    </td>
                                    <td className={`px-6 py-4 text-right font-bold text-sm ${isCredit ? 'text-emerald-600' : 'text-slate-900'}`}>
                                        {isCredit ? '+' : ''}£{Math.abs(tx.amount).toFixed(2)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};