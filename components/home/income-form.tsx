import { DialogClose } from "../ui/dialog"

const IncomeForm = () => {
  return (
    <form className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="" className="text-sm font-bold text-[#334155]">Amount</label>
        <input type="number" name="" id="" className="p-3 border border-[#E2E8F0] rounded-[12px]" />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="" className="text-sm font-bold text-[#334155]">Description</label>
        <textarea name="" id="" className="p-3 border border-[#E2E8F0] rounded-[12px] resize-none" />
      </div>
      <div className="flex gap-x-4">
        <div className="flex basis-[50%] flex-col gap-y-2">
          <label htmlFor="" className="text-sm font-bold text-[#334155]">Category</label>
        <input type="text" name="" id="" className="p-3 border border-[#E2E8F0] rounded-[12px]" />
        </div>     
         <div className="flex basis-[50%] flex-col gap-y-2">
          <label htmlFor="" className="text-sm font-bold text-[#334155]">Date</label>
        <input type="date" name="" id="" className="p-3 border border-[#E2E8F0] rounded-[12px]" />
        </div>
      </div>
      <div className="mt-8 flex gap-x-4">
        <DialogClose className="border border-[#E2E8F0] rounded-[12px] py-3 px-6 w-full text-base font-bold text-[#0F172A]">Cancel</DialogClose>
        <button className="rounded-[12px] py-3 px-6 w-full bg-brand-green text-base font-bold text-[#0F172A]">Save Transaction</button>
      </div>
    </form>
  )
}

export default IncomeForm