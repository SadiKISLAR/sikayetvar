import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/loginpage' element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoute