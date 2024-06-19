import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../components'
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages'

const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/marvel' element={ <MarvelPage /> } />
                <Route path='/dc' element={ <DcPage /> } />
                <Route path='/search' element={ <SearchPage /> } />
                <Route path='/hero/:id' element={ <HeroPage /> } />

                <Route path='/' element={<Navigate to='/marvel' /> } />
            </Routes>
        </>
    )
}

export default HeroesRoutes