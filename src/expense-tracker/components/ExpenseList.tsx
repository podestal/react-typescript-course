import { Button } from "@tremor/react"

interface Expense {
    id: number,
    description: string,
    amount: number,
    category: string,
}

interface Porps {
    expenses: Expense[],
    onDelete: (id: number) => void
}   

const ExpenseList = ({ expenses, onDelete }: Porps) => {

  return (
    <table>
        <thead>
            <tr>
                <th className="p-4">Description</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Category</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {expenses.map( expense => (
                <tr key={expense.id}
                >
                    <td className="p-4">{expense.description}</td>
                    <td className="p-4">{expense.amount}</td>
                    <td className="p-4">{expense.category}</td>
                    <Button 
                        onClick={() => onDelete(expense.id)}
                        color="red">Remove</Button>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
  )
}

export default ExpenseList