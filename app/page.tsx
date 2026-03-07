import Budgets from "@/components/home/budgets";
import Header from "@/components/home/header";
import Transactions from "@/components/home/transactions";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-tint">
      <Header />
      <Budgets/>
      <Transactions/>
    </div>
  );
}
