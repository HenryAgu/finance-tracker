"use client"
import { Banknote, Briefcase, ChartPie, CloudOff, CreditCard, PiggyBank } from "lucide-react"
import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import AddTransaction from "./add-transaction";
import { useTracker } from "@/store/useTrackerStore";
import { AddBudget } from "./add-budget";

type BudgetType = {
    header: string;
    icon: React.ReactNode;
    amount: number;
    subtitle: string;
}




const Header = () => {
    const [isTransactionDialogOpen, setIsTransactionDialogOpen] = React.useState(false);
    const [isBudgetDialogOpen, setIsBudgetDialogOpen] = React.useState(false);
    const budget = useTracker((s) => s.budget);
    const totalSpent = useTracker((s) => s.totalSpent());
    const available = useTracker((s) => s.available());
    const categories = useTracker((s) => s.categories());
    const budgets: BudgetType[] = [
        {
            header: "Monthly Budget",
            icon: <ChartPie className="text-brand-green" />,
            amount: budget,
            subtitle: `Across ${categories} categories`,
        },
        {
            header: "Total Spent",
            icon: <Banknote className="text-brand-green" />,
            amount: totalSpent,
            subtitle: "75% of limit reached",
        },
        {
            header: "Available",
            icon: <PiggyBank className="text-brand-green" />,
            amount: available,
            subtitle: "End of October status",
        },
    ]
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
                <div className="flex lg:flex-row flex-col gap-2">
                    <Dialog open={isBudgetDialogOpen} onOpenChange={setIsBudgetDialogOpen}>
                        <DialogTrigger className="bg-[#E2E8F0] mx-auto justify-center w-full lg:w-fit h-fit flex items-center gap-x-2 text-[#0F172A] px-6 py-3 rounded-[12px] cursor-pointer">
                            <Briefcase />
                            <span className="text-base font-bold">Add Budget</span>
                        </DialogTrigger>
                        <DialogContent className="border border-[#13EC5B33] p-5 lg:max-w-127.5 max-w-full">
                            <DialogTitle className='text-2xl font-bold text-[#0F172A] leading-8'>
                                Add Budget
                            </DialogTitle>
                            <AddBudget onSuccess={() => setIsBudgetDialogOpen(false)} />
                        </DialogContent>
                    </Dialog>
                    <Dialog open={isTransactionDialogOpen} onOpenChange={setIsTransactionDialogOpen}>
                        <DialogTrigger className="bg-brand-green mx-auto justify-center w-full lg:w-fit h-fit flex items-center gap-x-2 text-[#0F172A] px-6 py-3 rounded-[12px] cursor-pointer">
                            <CreditCard />
                            <span className="text-base font-bold">Add Transaction</span>
                        </DialogTrigger>
                        <DialogContent className="border border-[#13EC5B33] p-5 lg:max-w-127.5 max-w-full">
                            <DialogTitle className='text-2xl font-bold text-[#0F172A] leading-8'>
                                Add Transaction
                            </DialogTitle>
                            <AddTransaction onSuccess={() => setIsTransactionDialogOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="flex gap-5 lg:gap-6 overflow-x-auto md:flex-wrap scrollbar-hide">
                {budgets.map((item) => (
                    <div className="bg-white flex-none w-70 md:flex-1 p-4 rounded-[12px] shadow-[0px_1px_2px_0px_#00000005]" key={item.header}>
                        <div className="flex items-center justify-between pb-2">
                            <p className="text-[#64748B] text-base font-medium">{item.header}</p>
                            {item.icon}
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-3xl font-black text-[#0F172A]">₦{item.amount.toLocaleString()}</p>
                            <p className={`${item.subtitle === "75% of limit reached" ? "text-brand-green font-bold" : "text-[#64748B] text-sm font-normal"} `}>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header
