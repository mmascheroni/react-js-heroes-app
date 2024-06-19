import React from 'react'
import { useNavigate } from 'react-router-dom';

const BtnBack = () => {

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        <button onClick={ onNavigateBack }>Back</button>
    )
}

export default BtnBack