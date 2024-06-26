import { Navigate, Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

interface User {
    id: number,
    username: string,
}

const getUser = (): User | undefined => {
    return {
        id: 5,
        username: 'podestal'
    }
    // return undefined
}

const PrivateRoutes = () => {
    const user = getUser()

    if(!user) return <Navigate to='/login'/>

  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default PrivateRoutes