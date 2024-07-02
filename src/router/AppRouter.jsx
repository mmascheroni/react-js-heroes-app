import React from 'react'
import { LoginPage } from '../auth/pages/'
import HeroesRoutes from '../heroes/Routes/HeroesRoutes'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={ 
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />

            <Route path='/*' element={ 
                <PrivateRoutes>
                    <HeroesRoutes />
                </PrivateRoutes> 
            }/>
        </Routes>
    )
}

export default AppRouter