import useTodos from "./hooks/UseTodos"

const TodoList = () => {

    const { data: todos, error, isError, isLoading } = useTodos()

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
        {/* {console.log('data',todos)} */}
        {/* {console.log('error',error)} */}
        {todos?.map( (todo) => <p className='m-4' key={todo.id}>{todo.title}</p>)}
        </>
    </div>
  )
}

export default TodoList