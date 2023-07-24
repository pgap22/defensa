import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Welcome from './pages/Welcome'
import Perrito from './pages/perrito'
import LoginPerro from './pages/loginPerro'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome /> //Here your FormComponent
  },
  {
    path: "/mascota",
    element: <Perrito /> //Here your FormComponent
  },
  {
    path: "/login",
    element: <LoginPerro />
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
