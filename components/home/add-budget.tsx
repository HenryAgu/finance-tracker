import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DialogClose } from '../ui/dialog';

import { useTracker } from '@/store/useTrackerStore';

const BudgetSchema = z.object({
  amount: z.coerce.number().min(1, "Amount must be greater than 0"),
});

type BudgetFormData = z.infer<typeof BudgetSchema>;

export const AddBudget = ({ onSuccess }: { onSuccess?: () => void }) => {
  const setBudget = useTracker((s) => s.setBudget);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(BudgetSchema),   // ← schema passed in
  });

  const onSubmit = (data: BudgetFormData) => {
    setBudget(data.amount);
    reset();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
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
      <div className="mt-8 flex gap-x-4">
        <DialogClose className="border border-[#E2E8F0] rounded-[12px] py-3 px-6 w-full text-base font-bold text-[#0F172A]">
          Cancel
        </DialogClose>
        <button
          type="submit"
          className="rounded-[12px] py-3 px-6 w-full bg-brand-green text-base font-bold text-[#0F172A]"
        >
          Add Budget
        </button>
      </div>
    </form>
  );
};