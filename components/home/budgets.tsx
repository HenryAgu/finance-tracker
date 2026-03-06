import { Car, House, Lightbulb, Ticket, Utensils } from "lucide-react";
import React from "react"
import CategoriesCard from "./categories-card";

type BudgetTypes = {
  icon: React.ReactNode;
  label: string;
  title: string;
  amount: number;
  spent: number;
}

const budgets: BudgetTypes[] = [
  {
    icon: <House className="text-brand-green" />,
    label: "ON TRACK",
    title: "Housing",
    amount: 1500,
    spent: 1200,
  },
  {
    icon: <Utensils className="text-brand-green" />,
    label: "ON TRACK",
    title: "Food",
    amount: 600,
    spent: 450,
  },
  {
    icon: <Car className="text-amber-500" />,
    label: "NEAR LIMIT",
    title: "Transport",
    amount: 200,
    spent: 180,
  },
  {
    icon: <Ticket className="text-red-500" />,
    label: "OVER BUDGET",
    title: "Entertainment",
    amount: 300,
    spent: 350,
  },
  {
    icon: <Lightbulb className="text-brand-green" />,
    label: "ON TRACK",
    title: "Utilities",
    amount: 600,
    spent: 225,
  },
]

const Budgets = () => {
  return (
    <div className='py-8 px-5 lg:px-18 grid grid-cols-1 lg:grid-cols-4 gap-6'>
      {budgets.map((item) => (
        <CategoriesCard key={item.title} item={item}/>
      ))}
    </div>
  )
}

export default Budgets