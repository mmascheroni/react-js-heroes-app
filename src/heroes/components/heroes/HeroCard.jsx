import React from 'react'
import { Link } from 'react-router-dom';

const HeroCard = ({ id, publisher, superhero, alter_ego, first_appearance, characters, style }) => {

    const heroImageUrl = `/heroes/${ id }.jpg`;


    return (
        <div className={ style ? `hero-card ${ style }` : 'hero-card' }>
            <div className="hero-card--image animate__animated animate__fadeInLeft">
                <Link to={ `/hero/${ id }` }>
                    <img 
                    src={ heroImageUrl } 
                    className='card-img' 
                    alt={ superhero } />
                </Link>
            </div>

            <div className="hero-card--text">
                <h5>{ superhero }</h5>

                <div className="p-body">
                    <p className='p-card'><b>Alter Ego:</b> { alter_ego }</p>
                    <p className='p-card'><b>Firs Appearance:</b> { first_appearance }</p>
                    <p className='p-card'><b>Characters:</b> { characters }</p>
                </div>
                
            </div>
        </div>
    )
}

export default HeroCard