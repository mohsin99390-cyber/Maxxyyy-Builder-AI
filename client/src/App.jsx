import { Layout } from 'lucide-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authpage from './pages/Authpage'
import { AuthLayout, GuestLayout } from './pages/Layout'
import homepage from './pages/homepage'
import builderpage from './pages/builderpage'
import Previewpage from './pages/Previewpage'


const App = () => {
  return (
    <Routes>
      {/* Login routes */}
      <Route element={<GuestLayout />}>
        <Route path='/login' element={<Authpage mode="login" />} />
        <Route path='/register' element={<Authpage mode="register" />} />
      </Route>

      {/* Protected routes */}
      <Route element={<AuthLayout />}>
        <Route path='/' element={<homepage />} />
        <Route path='/builder/:id' element={<builderpage />} />
        <Route path='/preview/:id' element={<Previewpage />} />

      </Route >
    </Routes >
  )
}

export default App
