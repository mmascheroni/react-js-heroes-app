import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', {
            replace: true
        })
    }

    return (
        <>
            <h1>HeroesApp 🦸🏻</h1>

            <div className="container-login">
                <h3>Realice el Log In</h3>
                <hr />
                <button onClick={ onLogin }>Log In</button>
            </div>
        </>
    )
}

export default LoginPage