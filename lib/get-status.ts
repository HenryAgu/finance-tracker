export const getStatus = (spent: number, amount: number) => {
  const pct = (spent / amount) * 100;
  if (pct >= 100) return { color: "bg-red-500", labelColor: "text-red-500", badgeClass: "bg-red-50 text-red-500", iconBg: "bg-red-50" };
  if (pct >= 85)  return { color: "bg-amber-500", labelColor: "text-amber-500", badgeClass: "bg-amber-50 text-amber-500", iconBg: "bg-amber-50" };
  return { color: "bg-brand-green", labelColor: "text-brand-green", badgeClass: "bg-green-50 text-brand-green", iconBg: "bg-green-50" };
};