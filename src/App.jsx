import './App.css'
import { Layout } from './components/Layout/Layout'


import { ManageRoutes } from './components/ManageRoutes'
import { Navbar } from './components/Navbar/Navbar'

import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
        <ManageRoutes />
        </Layout>
      </AuthProvider>
    </>
  )
}


