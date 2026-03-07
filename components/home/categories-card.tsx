import React from 'react'
import { getStatus } from '@/lib/get-status';

type BudgetTypes = {
  icon: React.ReactNode;
  label: string;
  title: string;
  amount: number;
  spent: number;
}

const CategoriesCard = ({ item }: { item: BudgetTypes }) => {
  const pct = Math.min((item.spent / item.amount) * 100, 100);
  const status = getStatus(item.spent, item.amount);

  return (
    <div className="bg-white p-4 rounded-[12px] shadow-[0px_1px_2px_0px_#00000005] flex flex-col gap-y-3">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className={`${status.iconBg} p-2 rounded-[8px]`}>
          {item.icon}
        </div>
        <span className={`${status.badgeClass} text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide`}>
          {item.label}
        </span>
      </div>

      {/* Title + amounts */}
      <div className="flex flex-col gap-y-1">
        <p className="text-[#0F172A] font-semibold text-base">{item.title}</p>
        <div className="flex items-end gap-x-1">
          <p className="text-[#0F172A] font-black text-2xl">₦{item.spent.toLocaleString()}</p>
          <p className="text-[#94A3B8] text-sm pb-0.5">of ₦{item.amount.toLocaleString()}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-100 rounded-full">
        <div
          className={`h-1.5 rounded-full ${status.color} transition-all duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <p className={`text-sm font-medium ${status.labelColor}`}>
          {Math.round(pct)}% Spent
        </p>
      </div>
    </div>
  )
}

export default CategoriesCard