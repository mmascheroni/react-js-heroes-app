import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroCard } from '../index';

import './hero.css'

const HeroesList = ( { publisher } ) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] );

    return (
        <div className='container-hero--list animate__animated animate__fadeInLeft'>
            {
                heroes?.map(hero => (
                    <HeroCard key={ hero.id } {...hero } />
                ))
            }
        </div>
    )
}

export default HeroesList