import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
