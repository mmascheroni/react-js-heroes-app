import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

import './login.css'

const LoginPage = () => {

    const { login } = useContext( AuthContext );

    const [ name, setName ] = useState('');
    const [ error, setError ] = useState(false);

    const navigate = useNavigate();

    const onChange = (e) => {
        setName(e.target.value);
    }

    const onLogin = (e) => {
        e.preventDefault();

        if ( name == 0 ) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        } else {
            login( name );

            const lastPath = localStorage.getItem('lastPath') || '/';

            navigate( lastPath, {
                replace: true
            })
        }
    }

    return (
        <>
            <h1>HeroesApp 🦸🏻</h1>

            <div className="container-login">
                <h3>Realice el Log In</h3>
                <hr />
                <form className='form-login' onSubmit={ e => onLogin(e) }>
                    <input type="text" placeholder='Ingrese su nombre' onChange={ onChange } value={ name } />
                    <button>Log In</button>
                </form>
                { error && <p className='p-error'>❌ El campo nombre es requerido!</p>  }
            </div>
        </>
    )
}

export default LoginPage