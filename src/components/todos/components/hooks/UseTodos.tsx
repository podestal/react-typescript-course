import { useQuery } from "@tanstack/react-query"
import APIClient from "../../services/apiClient"
import todoSerice, {Todo} from "../../services/todoSerice"

const useTodos = (userId: number | undefined) => {

    return useQuery<Todo[], Error>({
        queryKey: userId ? ['users', userId, 'todos'] : ['todos'],
        queryFn: todoSerice.getAll,
        staleTime: 1 * 60 * 1000,
    })
}

export default useTodos