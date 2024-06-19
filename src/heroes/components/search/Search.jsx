import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import './search.css'

const Search = () => {

    const navigate = useNavigate();

    const [ searchParams ] = useSearchParams();

    const { searchText, onChange } = useForm( { searchText: searchParams.get('q') || '' } );

    const onSearch = (e) => {
        e.preventDefault()

        if ( searchText.trim().length <= 1 ) return;

        navigate(`/search?q=${searchText}`, {
            replace: false
        });

        
    }

    return (
        <form className='container-search' onSubmit={ onSearch }>
            <input type='text' name='searchText' value={ searchText } onChange={ onChange } />
            <button className='btn-search'>🔎</button>
        </form>
    )
}

export default Search