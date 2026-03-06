import Budgets from "@/components/home/budgets";
import Header from "@/components/home/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-tint">
      <Header />
      <Budgets/>
    </div>
  );
}
