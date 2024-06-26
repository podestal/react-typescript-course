import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import router from './routing/routes.tsx'
import './index.css'
import { RouterProvider } from 'react-router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      cacheTime: 300_000,
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,

    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
