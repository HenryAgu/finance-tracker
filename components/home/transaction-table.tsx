"use client"
import { Clapperboard, Fuel, ShoppingCart, Zap } from "lucide-react";
import { useState } from "react";

const transactions = [
    {
        id: 1,
        description: "Weekly Groceries",
        category: "Food",
        date: "Oct 24, 2023",
        amount: 125.50,
        icon: <ShoppingCart size={18} className="text-brand-green" />,
        iconBg: "bg-green-100",
        categoryColor: "text-green-600",
        categoryBg: "bg-green-100",
    },
    {
        id: 2,
        description: "Cinema Tickets",
        category: "Entertainment",
        date: "Oct 22, 2023",
        amount: 45.00,
        icon: <Clapperboard size={18} className="text-brand-green" />,
        iconBg: "bg-pink-100",
        categoryColor: "text-pink-500",
        categoryBg: "bg-pink-100",
    },
    {
        id: 3,
        description: "Gas Station",
        category: "Transport",
        date: "Oct 21, 2023",
        amount: 60.00,
        icon: <Fuel size={18} className="text-brand-green" />,
        iconBg: "bg-amber-100",
        categoryColor: "text-amber-500",
        categoryBg: "bg-amber-100",
    },
    {
        id: 4,
        description: "Electric Bill",
        category: "Utilities",
        date: "Oct 18, 2023",
        amount: 115.00,
        icon: <Zap size={18} className="text-brand-green" />,
        iconBg: "bg-green-100",
        categoryColor: "text-green-600",
        categoryBg: "bg-green-100",
    },
];

export default function TransactionTable() {
    const [hovered, setHovered] = useState<number | null>(null);

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
            {transactions.map((t, i) => (
                <div
                    key={t.id}
                    className={`grid grid-cols-4 px-3 lg:px-7 min-w-150 py-5 items-center transition-colors duration-150 ${i !== transactions.length - 1 ? "border-b border-gray-50" : ""
                        } ${hovered === t.id ? "bg-gray-50" : "bg-white"}`}
                    onMouseEnter={() => setHovered(t.id)}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Description */}
                    <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${t.iconBg}`}>
                            {t.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{t.description}</span>
                    </div>

                    {/* Category */}
                    <div>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${t.categoryBg} ${t.categoryColor}`}>
                            {t.category}
                        </span>
                    </div>

                    {/* Date */}
                    <span className="text-sm text-gray-400">{t.date}</span>

                    {/* Amount */}
                    <span className="text-sm font-semibold text-red-400 text-right">
                        -${t.amount.toFixed(2)}
                    </span>
                </div>
            ))}

        </div>

    );
}