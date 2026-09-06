import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../context/Appcontext'
import Loading from '../components/Loading'

export function AuthLayout(){
    const {user , LoadingUser} = useAppContext()


if(LoadingUser) return <Loading />
if (!user) return <Navigate to = "/login" replace />

return <Outlet />
    
}

export function GuestLayout(){
    const {user , LoadingUser} = useAppContext()


if(LoadingUser) return <Loading />
if (user) return <Navigate to = "/" replace />

return <Outlet />
    
}