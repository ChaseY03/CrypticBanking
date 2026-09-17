import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { Transaction } from '../../types/index';

interface SpendingChartCardProps {
    transactions: Transaction[];
}

export const SpendingCard: React.FC<SpendingChartCardProps> = ({ transactions }) => {
    const chartData = React.useMemo(() => {
        const monthlyMap = new Map<string, { month: string; income: number; expenses: number }>();

        [...transactions]
            .reverse()
            .forEach((tx) => {
                const date = new Date(tx.date);
                const monthKey = date.toLocaleString('en-GB', { month: 'short' });

                if (!monthlyMap.has(monthKey)) {
                    monthlyMap.set(monthKey, { month: monthKey, income: 0, expenses: 0 });
                }

                const current = monthlyMap.get(monthKey)!;
                if (tx.amount > 0) {
                    current.income += tx.amount;
                } else {
                    current.expenses += Math.abs(tx.amount);
                }
            });

        return Array.from(monthlyMap.values());
    }, [transactions]);

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-slate-900 text-sm">Cash Flow Analytics</h3>
                    <p className="text-xs text-slate-500">Dynamic Income vs Expenses breakdown</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-red-600">
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block" /> Income
                    </span>
                    <span className="flex items-center gap-1.5 text-rose-500">
                        <span className="w-2.5 h-2.5 bg-rose-500 rounded-full inline-block" /> Expenses
                    </span>
                </div>
            </div>

            <div className="h-64 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                        <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(v) => `£${v}`} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff' }}
                            itemStyle={{ fontSize: '12px', color: '#fff' }}
                            formatter={(value: number | string | undefined) => [
                                `£${Number(value ?? 0).toFixed(2)}`,
                                ''
                            ]}
                        />
                        <Area type="monotone" dataKey="income" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#incomeGrad)" />
                        <Area type="monotone" dataKey="expenses" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#expenseGrad)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};