import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (
    <>
        <NavBar />
        <div id='main'>
            <Outlet />
        </div>
    </>
  )
}

export default Layout