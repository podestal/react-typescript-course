// import ListGroup from "./components/ListGroup"
// import Alert from "./components/Alert"
// import Button from "./components/Button"
// import Form from "./components/Form"
import { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpensesFilter from "./expense-tracker/components/ExpensesFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"
import categories from "./expense-tracker/categories"
import TodoList from "./components/todos/components/TodoList"

const App = () => {

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'adfadf',
      amount: 10,
      category: 'Utilities',
    },
    {
      id: 2,
      description: 'bbbbbb',
      amount: 4,
      category: 'Utilities',
    },
    {
      id: 3,
      description: 'cccccc',
      amount: 15,
      category: 'Utilities',
    },
    {
      id: 4,
      description: 'ddddddd',
      amount: 3,
      category: 'Utilities',
    },
  ])

//   const items = [
//     'New York',
//     'San Francisco',
//     'Tokyo',
//     'London',
//     'Paris'
// ]

// const handleSelectItem = (item: string): void => {
//   console.log(item)
  
// }

  const [selectedCategory, setSelectedCategorie] = useState('')
  const visibleExpenses = selectedCategory ? expenses.filter( expense => expense.category === selectedCategory) : expenses
  return (
    <div className="max-w-[1070px]">
      {/* <ListGroup 
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        <h1 className="text-xl">Hola Typescript</h1>
      </Alert> */}
      {/* <Button><h1 className="text-slate-200 font-semibold hover:text-slate-100">Click Moi</h1></Button> */}
      {/* <Form /> */}
      {/* <ExpenseForm 
        onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])}
      />
      <ExpensesFilter 
        onSelectCategory={ category => setSelectedCategorie(category)}
      />
      <ExpenseList 
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter( expense => expense.id !== id))}
      /> */}
      <TodoList />
    </div>
  )
}

export default App
