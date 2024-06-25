import { useState } from "react"
import useTodos from "./hooks/UseTodos"

const TodoList = () => {

    const [userId, setUserId] = useState<number>()
    const { data: todos, error, isError, isLoading } = useTodos(userId)

    // const [todos, setTodos] = useState<Todo[]>([])
    // const [error, setError] = useState('')

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos/')
    //     .then( res => setTodos(res.data))
    //     .catch( err => setError(err))
    // }, [])

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div>
        <>
        <h2 className="text-6xl">Todos List</h2>
        <select value={userId} onChange={e => setUserId(parseInt(e.target.value))}>
            <option value=""></option>
            <option value="1">User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
        </select>
        {/* {console.log('data',todos)} */}
        {/* {console.log('error',error)} */}
        {todos?.map( (todo) => <p className='m-4' key={todo.id}>{todo.title}</p>)}
        </>
    </div>
  )
}

export default TodoList