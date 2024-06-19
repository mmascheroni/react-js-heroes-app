import queryString from 'query-string';
import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { BtnBack, HeroCard } from '../components/';
import '../components/heroes/hero.css'

const SearchPage = () => {

    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const heroes = useMemo( () => getHeroesByName(q), [q]);

    return (
        <>
            <h3>Search: { q }</h3>
            <hr />

            <div className="hero-page animate__animated animate__fadeIn">
                <div className="hero-card--page search-page--card">
                {
                    heroes.length > 0 
                    ? 
                    heroes.map( hero => (
                        <HeroCard style={'card-page'} key={ hero.id } {...hero } />
                    ) )
                    :
                    <p>No se encontraron Heroes que coincidan con la busqueda</p>
                }
                </div>

                <BtnBack />
            </div>
        </>
        
    )
}

export default SearchPage