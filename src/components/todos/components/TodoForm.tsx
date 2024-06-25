import { useRef } from "react"
import { TextInput, Button } from "@tremor/react"
import useAddTodo from "./hooks/UseAddTodo"

const TodoForm = () => {    

    const ref = useRef<HTMLInputElement>(null)
    const addTodo = useAddTodo(() => {
        if (ref.current) ref.current.value = ''
    })

  return (
    <>
        {addTodo.error && <p className="text-xl text-red-500">Ocurrió un error: {addTodo.error.message}</p>}
        <form 
            className="flex flex-col w-[270px] m-auto gap-4 my-6"
            onSubmit={e => {
                e.preventDefault()
                if (ref.current && ref.current.value) {
                    addTodo.mutate({
                        id: 0,
                        title: ref.current?.value,
                        completed: false,
                        userId: 1,
                    })
                }
            }}
        >
            <TextInput 
                ref={ref}
            />
            <Button disabled={addTodo.isLoading} color="blue">{addTodo.isLoading ? 'Adding ...' : 'Add'}</Button>
        </form>
    </>
  )
}

export default TodoForm