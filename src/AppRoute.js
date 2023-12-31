import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'


const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
        </Routes>
    )
}

export default AppRoute