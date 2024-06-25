import { TextInput, Button, NumberInput } from "@tremor/react"
import { FieldErrors, FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"

const schema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    age: z.number({ invalid_type_error: 'Age field is required' }).min(18, { message: 'Age must be over 18'})
})

type FormData = z.infer<typeof schema>

const Form = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onSubmit = (data: FieldValues) : void => console.log(data)

    const getNameErrorMsg = (errors: FieldErrors) => {
        if (errors.name?.type === 'required') {
            return 'Name is required'
        }
    }
    

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-8 my-8">
        <h2 className="text-6xl font-bold my-4">Form</h2>
        <div className="mb-3 w-[30%] flex flex-col justify-center items-center gap-4">
            <p className="text-2xl">Name</p>
            <TextInput 
                { ...register('name')}
                placeholder="Name .."
                error={errors.name !== undefined}
                errorMessage={errors.name?.message}
            />
        </div>
        <div className="mb-3 w-[30%] flex flex-col justify-center items-center gap-4">
            <p className="text-2xl">Age</p>
            <NumberInput 
                { ...register('age', {valueAsNumber: true}) }
                placeholder="Age ..."
                error={errors.age !== undefined}
                errorMessage={errors.age?.message}
            />
        </div>  
        <Button disabled={!isValid} color="blue" size="xl">Submit</Button>
    </form>
  )
}

export default Form