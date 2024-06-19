import React from 'react'
import { LoginPage } from '../auth/pages/'
import HeroesRoutes from '../heroes/Routes/HeroesRoutes'
import { Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/*' element={ <HeroesRoutes /> } />
        </Routes>
    )
}

export default AppRouter