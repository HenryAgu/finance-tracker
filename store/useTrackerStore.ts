import { create } from "zustand";

type TrackerStore = {
  budget: number;
  totalSpent: number;
  available: number;
  categories: number;
  setBudget: (amount: number) => void;
  addExpense: (amount: number) => void;
};

export const useTracker = create<TrackerStore>((set) => ({
  budget: 3200,
  totalSpent: 0,
  available: 3200,
  categories: 5,

  setBudget: (amount) =>
    set((state) => ({
      budget: amount,
      available: amount - state.totalSpent,
    })),

  addExpense: (amount) =>
    set((state) => ({
      totalSpent: state.totalSpent + amount,
      available: state.budget - (state.totalSpent + amount),
    })),
}));
