'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "../ui/dialog";
import { useForm } from "react-hook-form";
import { TransactionFormData, TransactionSchema } from "../schemas/form";
import { useTracker } from "@/store/useTrackerStore";

const IncomeForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const addTransaction = useTracker((s) => s.addTransaction);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(TransactionSchema),
  });

  const onSubmit = (data: TransactionFormData) => {
    addTransaction({ ...data, type: "income" });
    reset();
    onSuccess?.();
  };

  return (
    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="income-amount" className="text-sm font-bold text-[#334155]">Amount</label>
        <input
          type="number"
          id="income-amount"
          step="0.01"
          className="p-3 border border-[#E2E8F0] rounded-[12px]"
          {...register("amount")}
        />
        {errors.amount && (
          <span className="text-red-500 text-sm mt-1">{errors.amount.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="income-description" className="text-sm font-bold text-[#334155]">Description</label>
        <textarea
          id="income-description"
          className="p-3 border border-[#E2E8F0] rounded-[12px] resize-none"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>
        )}
      </div>
      <div className="flex gap-x-4">
        <div className="flex basis-[50%] flex-col gap-y-2">
          <label htmlFor="income-category" className="text-sm font-bold text-[#334155]">Category</label>
          <input
            type="text"
            id="income-category"
            className="p-3 border border-[#E2E8F0] rounded-[12px]"
            {...register("category")}
          />
          {errors.category && (
            <span className="text-red-500 text-sm mt-1">{errors.category.message}</span>
          )}
        </div>
        <div className="flex basis-[50%] flex-col gap-y-2">
          <label htmlFor="income-date" className="text-sm font-bold text-[#334155]">Date</label>
          <input
            type="date"
            id="income-date"
            className="p-3 border border-[#E2E8F0] rounded-[12px]"
            {...register("date")}
          />
          {errors.date && (
            <span className="text-red-500 text-sm mt-1">{errors.date.message}</span>
          )}
        </div>
      </div>
      <div className="mt-8 flex gap-x-4">
        <DialogClose className="border border-[#E2E8F0] rounded-[12px] py-3 px-6 w-full text-base font-bold text-[#0F172A]">
          Cancel
        </DialogClose>
        <button
          type="submit"
          className="rounded-[12px] py-3 px-6 w-full bg-brand-green text-base font-bold text-[#0F172A]"
        >
          Save Transaction
        </button>
      </div>
    </form>
  );
};

export default IncomeForm;