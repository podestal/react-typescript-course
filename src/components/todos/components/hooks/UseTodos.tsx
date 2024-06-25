import axios from "axios"
import { useQuery } from "@tanstack/react-query"

interface Todo {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

const useTodos = () => {
    const fetchTodos = () =>         
    axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/')
    .then( res => res.data)
    .catch( err => err)

    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    })
}

export default useTodos