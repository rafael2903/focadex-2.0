import React from 'react'
import { RedButton } from './styles'
import { Link } from 'react-router-dom'

const LogOutButton = ({ setLogin }) => {

    const logOut = () => {
        localStorage.removeItem('logged');
        localStorage.removeItem('username');
        setLogin(false);
    }

    return (
        <Link to='/login'>
            <RedButton onClick={logOut}>
                Sair
            </RedButton>
        </Link>
    )
}

export default LogOutButton;