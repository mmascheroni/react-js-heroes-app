import React from 'react'
import AppRouter from './router/AppRouter'
import Footer from './heroes/components/footer/Footer'
import { AuthProvider } from './auth'

const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
            <Footer />
        </AuthProvider>
    )
}

export default HeroesApp