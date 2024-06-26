import useAuthStore from "./Store"
import { Button } from "@tremor/react"
const Login = () => {

    const {user, login, logout} = useAuthStore()

  return (
    <div>
        <p className="text-xl">{user}</p>
        <Button
            onClick={() => login('podestal')}
            color='blue'
        >Login</Button>
        <Button
            onClick={() => logout()}
            color='blue'
        >Logout</Button>
    </div>
  )
}

export default Login