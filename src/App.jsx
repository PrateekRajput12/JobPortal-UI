import React from 'react'
import NavBar from './components/shared/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/auth/Login'
import Signup from './components/auth/SIgnup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'

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
    },
    {
      path: "/jobs",
      element: <Jobs />
    },
    {
      path: "/description/:id",
      element: <JobDescription />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    // for admin

    {
      path: "/admin/companies",
      element: <Companies />
    },
    {
      path: "/admin/companies/create",
      element: <CompanyCreate />
    },
    {
      path: "/admin/companies/:id",
      element: <CompanySetup />
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