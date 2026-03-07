import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import ExpenseForm from './expense-form'
import IncomeForm from './income-form'

interface AddTransactionProps {
  onSuccess?: () => void;
}

const AddTransaction = ({ onSuccess }: AddTransactionProps) => {
  const TABS = [
    { value: 'expense', label: 'Expense', content: <ExpenseForm onSuccess={onSuccess} /> },
    { value: 'income', label: 'Income', content: <IncomeForm onSuccess={onSuccess} /> },
  ] as const;

  return (
    <div className="my-5">
      <Tabs defaultValue="expense">
        <TabsList className="flex w-full rounded-xl bg-slate-100 p-1">
          {TABS.map(({ value, label }) => (
            <TabsTrigger key={value} value={value} className="h-9.5 w-full">
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map(({ value, content }) => (
          <TabsContent key={value} value={value} className="mt-5 h-[20vh] overflow-y-auto">
            {content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default AddTransaction