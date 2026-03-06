import { Banknote, ChartPie, CloudOff, CreditCard, PiggyBank } from "lucide-react"
import { Button } from "../ui/button"
import React from "react";

type BudgetType = {
    header: string;
    icon: React.ReactNode;
    amount: number;
    subtitle: string;
}


const budgets: BudgetType[] = [
    {
        header: "Monthly Budget",
        icon: <ChartPie className="text-brand-green" />,
        amount: 3200.00,
        subtitle: "Across 5 categories",
    },
    {
        header: "Total Spent",
        icon: <Banknote className="text-brand-green" />,
        amount: 2405.00,
        subtitle: "75% of limit reached",
    },
    {
        header: "Available",
        icon: <PiggyBank className="text-brand-green" />,
        amount: 795.00,
        subtitle: "End of October status",
    },
]

const Header = () => {
    return (
        <div className="py-5 lg:py-8 px-5 lg:px-18 flex flex-col gap-y-8">
            <div className="flex lg:flex-row flex-col gap-y-10 justify-between">
                <div className="flex flex-col gap-y-2">
                    <p className="text-4xl font-black text-[#0F172A] leading-11.5 tracking-[-0.9px]">Monthly Budget</p>
                    <p className="text-[#64748B] text-lg font-normal">Track your monthly spending and manage budget limits across categories.</p>
                    <div className="flex items-center gap-x-2 border border-[#13EC5B0D] w-fit bg-[#F1F5F9] px-3 py-1 rounded-full text-[#94A3B8]">
                        <CloudOff size={12} />
                        <p className="text-xs font-normal ">Data is saved locally to your browser</p>
                    </div>
                </div>
                <Button className="bg-brand-green w-fit flex items-center gap-x-2 text-[#0F172A] px-6 py-5" size="lg" type="button">
                    <CreditCard />
                    <span>Add Transaction</span>
                </Button>
            </div>
            <div className="flex gap-5 lg:gap-6 overflow-x-auto md:flex-wrap scrollbar-hide">
                {budgets.map((item) => (
                    <div className="bg-white flex-none w-70 md:flex-1 p-4 rounded-[12px] shadow-[0px_1px_2px_0px_#00000005]" key={item.header}>
                        <div className="flex items-center justify-between pb-2">
                            <p className="text-[#64748B] text-base font-medium">{item.header}</p>
                            {item.icon}
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-3xl font-black text-[#0F172A]">${item.amount.toLocaleString()}</p>
                            <p className={`${item.subtitle === "75% of limit reached" ? "text-brand-green font-bold" : "text-[#64748B] text-sm font-normal"} `}>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header
