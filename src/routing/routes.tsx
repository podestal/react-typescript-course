import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserListPage from '../pages/UserListPage'
import ContactPage from '../pages/ContactPage'
import UserDetailPage from '../pages/UserDetailPage'
import Layout from '../pages/Layout'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import PrivateRoutes from '../pages/PrivateRoutes'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'login', element: <Login /> },
        ]
    },
    {
        element: <PrivateRoutes />,
        children: [
            { path: 'users', element: <UserListPage /> },
            { path: 'users/:id', element: <UserDetailPage /> },
            { path: 'contact', element: <ContactPage /> },
        ]
    }
])

export default router