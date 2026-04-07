import { useState } from 'react'
import Header from './component/Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { CourseProvider } from './contexts/CourseContext.jsx'

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
