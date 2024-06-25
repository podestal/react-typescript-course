import { useQueryClient, useMutation } from "@tanstack/react-query"
import todoSerice, { Todo} from "../../services/todoSerice"

const useAddTodo = (onAdd: () => void) => {

    const queryClient = useQueryClient()
    const userId = 1

    return useMutation<Todo, Error, Todo>({
        mutationFn: (todo: Todo) => 
            todoSerice.post(todo),
        onSuccess: (savedTodo, newTodo) => {
            console.log('newTodo', newTodo)
            queryClient.setQueryData<Todo[]>(['users', userId, 'todos'], todos => [savedTodo, ...(todos || [])])
            onAdd()

        }
    })
}

export default useAddTodo