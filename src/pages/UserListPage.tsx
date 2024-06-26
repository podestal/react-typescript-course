import { Link } from "react-router-dom"

const UserListPage = () => {

    const users = [
        { id: 1, name: 'Mosh' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Alice' },
    ]

  return (
    <div className="w-full flex flex-col justify-center items-start gap-8 m-4">
        <h2 className="text-4xl">Users</h2>
        <ul className="my-4">
            {users.map(user => <li className="my-4" key={user.id}><Link className="text-xl font-bold" to={`/users/${user.id}`}>{user.name}</Link></li>)}
        </ul>
    </div>
  )
}

export default UserListPage