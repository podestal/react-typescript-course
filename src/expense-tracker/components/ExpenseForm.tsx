import {useForm} from 'react-hook-form'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { TextInput, NumberInput, Button } from "@tremor/react"
import categories from '../categories'

const schema = z.object({
    description: z.string().min(3, {message: 'Description must be at least 3 characters'}).max(50),
    amount: z.number({ invalid_type_error: 'Amount is required' }).min(0.01).max(100_000),
    category: z.enum(categories, {
        errorMap: () => ({ message: 'Category is required' })
    })
})

type ExpenseFormData = z.infer<typeof schema>
type FormData = z.infer<typeof schema>

interface Props {
    onSubmit: (data:ExpenseFormData) => void
}

const ExpenseForm = ({ onSubmit }: Props) => {

    const { register, handleSubmit, reset, formState: {errors} } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })

  return (
    <form onSubmit={handleSubmit( data => {
        onSubmit(data)
        reset()
    })}>
        <div className="mb-3">
            <p className="text-2xl">Description</p>
            <TextInput 
                { ...register('description')}
                placeholder="Description ..."
                error={errors.description !== undefined}
                errorMessage={errors.description?.message}
            />
        </div>
        <div className="mb-3">
            <p className="text-2xl">Amount</p>
            <NumberInput 
                { ...register('amount', { valueAsNumber: true })}
                placeholder="Amount ..."
                error={errors.amount !== undefined}
                errorMessage={errors.amount?.message}
            />
        </div>
        <div className="mb-3">
            <p className="text-2xl">Categories</p>
            <select
                { ...register('category')}
            >
                <option value=""></option>
                {categories.map( cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            {errors.category && <p className='text-red-500'>{errors.category?.message}</p>}
        </div>
        <Button color="blue" size="xl">Submit</Button>
    </form>
  )
}

export default ExpenseForm