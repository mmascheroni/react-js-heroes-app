import React, { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';
import { BtnBack, HeroCard } from '../components';

const HeroPage = () => {

    const { id } = useParams();

    const hero = useMemo( () => getHeroById( id ), [id] ) ;

    if ( !hero ) {
        return <Navigate to='/marvel' />
    }



    return (
        <div className="hero-page animate__animated animate__fadeIn">
            <div className="hero-card--page">
                <HeroCard style='card-page' key={ id } { ...hero } />
            </div>

            <BtnBack />
        </div>
        
    )
}

export default HeroPage