import React from 'react'
import { HeroesList } from '../components'

const MarvelPage = () => {
    return (
        <>
            <h3>Marvel Comics</h3>
            <hr />
            <HeroesList publisher={ 'Marvel Comics' } />
        </>
    )
}

export default MarvelPage