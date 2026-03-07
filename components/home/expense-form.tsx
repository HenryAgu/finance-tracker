'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from '../ui/dialog'
import { useForm } from 'react-hook-form'
import { ExpenseFormData, FormSchema } from "../schemas/form";

const ExpenseForm = () => {
const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormData>({
  resolver: zodResolver(FormSchema),
});

  const onSubmit = async (data: ExpenseFormData) => {
    console.log(data);
    reset()
  };
  return (
    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="" className="text-sm font-bold text-[#334155]">Amount</label>
        <input type="number" id="" className="p-3 border border-[#E2E8F0] rounded-[12px]" {...register("amount")} />
        {errors.amount && (<span className="text-red-500 text-sm mt-1">
          {errors.amount?.message}
        </span>)}
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="" className="text-sm font-bold text-[#334155]">Description</label>
        <textarea {...register("description")} id="" className="p-3 border border-[#E2E8F0] rounded-[12px] resize-none" />
        {errors.description && (<span className="text-red-500 text-sm mt-1">
          {errors.description?.message}
        </span>)}
      </div>
      <div className="flex gap-x-4">
        <div className="flex basis-[50%] flex-col gap-y-2">
          <label htmlFor="" className="text-sm font-bold text-[#334155]">Category</label>
          <input type="text" id="" className="p-3 border border-[#E2E8F0] rounded-[12px]" {...register("category")} />
          {errors.category && (<span className="text-red-500 text-sm mt-1">
            {errors.category?.message}
          </span>)}
        </div>
        <div className="flex basis-[50%] flex-col gap-y-2">
          <label htmlFor="" className="text-sm font-bold text-[#334155]">Date</label>
          <input type="date" id="" className="p-3 border border-[#E2E8F0] rounded-[12px]" {...register("date")} />
          {errors.date && (<span className="text-red-500 text-sm mt-1">
            {errors.date?.message}
          </span>)}
        </div>
      </div>
      <div className="mt-8 flex gap-x-4">
        <DialogClose className="border border-[#E2E8F0] rounded-[12px] py-3 px-6 w-full text-base font-bold text-[#0F172A]">Cancel</DialogClose>
        <button className="rounded-[12px] py-3 px-6 w-full bg-brand-green text-base font-bold text-[#0F172A]">Save Transaction</button>
      </div>
    </form>
  )
}

export default ExpenseForm
