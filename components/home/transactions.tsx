import { History } from 'lucide-react'
import TransactionTable from './transaction-table'

const Transactions = () => {
  return (
    <div className='py-5 lg:py-8 px-5 lg:px-18'>
      <div className="border border-brand-green-subtle p-6 bg-white rounded-[12px] flex flex-col gap-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <History className='text-brand-green'/>
            <p className='text-base lg:text-xl font-bold text-[#0F172A]'>Recent Transactions</p>
          </div>
          <p className='text-sm text-brand-green font-bold'>View All</p>
        </div>
        <TransactionTable/>
      </div>
    </div>
  )
}

export default Transactions
