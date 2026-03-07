"use client"
import { useState } from "react";
import { useTracker } from "@/store/useTrackerStore";
import {
  Clapperboard,
  Fuel,
  ShoppingCart,
  Zap,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const categoryIconMap: Record<string, React.ReactNode> = {
  food: <ShoppingCart size={18} className="text-brand-green" />,
  entertainment: <Clapperboard size={18} className="text-brand-green" />,
  transport: <Fuel size={18} className="text-brand-green" />,
  utilities: <Zap size={18} className="text-brand-green" />,
};

const categoryColorsMap: Record<string, { bg: string; text: string; iconBg: string }> = {
  food: { bg: "bg-green-100", text: "text-green-600", iconBg: "bg-green-100" },
  entertainment: { bg: "bg-pink-100", text: "text-pink-500", iconBg: "bg-pink-100" },
  transport: { bg: "bg-amber-100", text: "text-amber-500", iconBg: "bg-amber-100" },
  utilities: { bg: "bg-blue-100", text: "text-blue-500", iconBg: "bg-blue-100" },
};

const defaultColors = { bg: "bg-slate-100", text: "text-slate-500", iconBg: "bg-slate-100" };

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function TransactionTable() {
  const transactions = useTracker((s) => s.transactions);
  const [hovered, setHovered] = useState<string | null>(null);

  if (transactions.length === 0) {
    return (
      <div className="bg-white w-full flex flex-col items-center justify-center py-16 gap-y-3">
        <p className="text-gray-400 text-sm font-medium">No transactions yet.</p>
        <p className="text-gray-300 text-xs">Add an expense or income to get started.</p>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-x-scroll w-full">
      {/* Header */}
      <div className="grid grid-cols-4 px-3 lg:px-7 py-3 bg-gray-50 border-b border-gray-100 min-w-150">
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">Description</span>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">Category</span>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">Date</span>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 text-right">Amount</span>
      </div>

      {/* Rows */}
      {transactions.map((t, i) => {
        const key = t.category.trim().toLowerCase();
        const colors = categoryColorsMap[key] ?? defaultColors;
        const icon = categoryIconMap[key] ?? (
          t.type === "income"
            ? <TrendingUp size={18} className="text-brand-green" />
            : <TrendingDown size={18} className="text-brand-green" />
        );
        const isExpense = t.type === "expense";

        return (
          <div
            key={t.id}
            className={`grid grid-cols-4 px-3 lg:px-7 min-w-150 py-5 items-center transition-colors duration-150 ${
              i !== transactions.length - 1 ? "border-b border-gray-50" : ""
            } ${hovered === t.id ? "bg-gray-50" : "bg-white"}`}
            onMouseEnter={() => setHovered(t.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Description */}
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${colors.iconBg}`}>
                {icon}
              </div>
              <span className="text-sm font-medium text-gray-800">{t.description}</span>
            </div>

            {/* Category */}
            <div>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                {t.category}
              </span>
            </div>

            {/* Date */}
            <span className="text-sm text-gray-400">{formatDate(t.date)}</span>

            {/* Amount */}
            <span
              className={`text-sm font-semibold text-right ${
                isExpense ? "text-red-400" : "text-emerald-500"
              }`}
            >
              {isExpense ? "-" : "+"}₦{t.amount.toFixed(2)}
            </span>
          </div>
        );
      })}
    </div>
  );
}