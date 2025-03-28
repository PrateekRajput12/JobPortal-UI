import React from 'react'
import NavBar from './components/shared/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/auth/Login'
import Signup from './components/auth/SIgnup'
import Home from './components/Home'

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ]
)
const App = () => {
  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App