import React from 'react'
import AppRouter from './router/AppRouter'
import Footer from './heroes/components/footer/Footer'

const HeroesApp = () => {
    return (
        <>  
            <AppRouter />
            <Footer />
        </>
    )
}

export default HeroesApp