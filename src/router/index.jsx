import React, { useEffect } from 'react'
import { useRoutes, useNavigate } from 'react-router-dom'
import generateRouter from '@/utils/generateRouter'
import admin from './admin'

import Login from '@/views/login'
import Layout from '@/layout'

const getRouter = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true })
    }
  }, [token])

  const router = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [...generateRouter(admin)]
    },
    {
      path: '/login',
      element: <Login />
    }
    // {
    //   path: '*',
    //   element: <Navigate to='/login' />
    // }
  ])
  return router
}

// handleRouteBefore((pathname, meta) => {
//   console.log(pathname, meta)
// })
export default getRouter
