import categories from "../categories"

interface Props {
    onSelectCategory: (category: string) => void
}

const ExpensesFilter = ({ onSelectCategory }: Props) => {
  return (
    <select className="m-3" onChange={e => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map( cat => <option key={cat} value={cat}>{cat}</option>)}
    </select>
  )
}

export default ExpensesFilter