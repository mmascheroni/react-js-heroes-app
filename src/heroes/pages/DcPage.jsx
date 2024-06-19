import React from 'react'
import { HeroesList } from '../components'

const DcPage = () => {
    return (
        <>
            <h3>DC Comics</h3>
            <hr />

            <HeroesList publisher={ 'DC Comics' } />
        </>
    )
}

export default DcPage