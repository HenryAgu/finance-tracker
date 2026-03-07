import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TransactionType = "expense" | "income";

export type Transaction = {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  category: string;
  date: string;
};

type TrackerStore = {
  budget: number;
  transactions: Transaction[];

  // Derived helpers (computed on access)
  totalSpent: () => number;
  totalIncome: () => number;
  available: () => number;
  categories: () => number;

  // Actions
  setBudget: (amount: number) => void;
  addTransaction: (tx: Omit<Transaction, "id">) => void;
  removeTransaction: (id: string) => void;
};

export const useTracker = create<TrackerStore>()(
  persist(
    (set, get) => ({
      budget: 100,
      transactions: [],

      totalSpent: () =>
        get()
          .transactions.filter((t) => t.type === "expense")
          .reduce((sum, t) => sum + t.amount, 0),

      totalIncome: () =>
        get()
          .transactions.filter((t) => t.type === "income")
          .reduce((sum, t) => sum + t.amount, 0),

      available: () => {
        const s = get();
        return s.budget - s.totalSpent();
      },

      categories: () => {
        const cats = new Set(
          get()
            .transactions.filter((t) => t.type === "expense")
            .map((t) => t.category.trim().toLowerCase())
        );
        return cats.size;
      },

      setBudget: (amount) => set({ budget: amount }),

      addTransaction: (tx) =>
        set((state) => ({
          transactions: [
            { ...tx, id: crypto.randomUUID() },
            ...state.transactions,
          ],
        })),

      removeTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
    }),
    {
      name: "finance-tracker-store",
    }
  )
);
