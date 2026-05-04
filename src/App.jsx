import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { CourseProvider } from './contexts/CourseContext.jsx'
import Header from './component/layout/Header/Header.jsx'

function App() {

  return (
    <>
    <AuthProvider >
      <CourseProvider>
        <Header />
        <Outlet />
      </CourseProvider>
    </AuthProvider>
    </>
  )
}

export default App
