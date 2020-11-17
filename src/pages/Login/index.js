import React, { useState } from 'react';
import { Container, LoginInput, LoginButton } from './styles'
import logo from '../../assets/logoPokemon.png';
import axios from 'axios';
import { Link } from 'react-router-dom'

const APIurl = 'https://pokedex20201.herokuapp.com/';


const LoginPage = ({username, setUsername, setLogin}) => {

    const login = (username) => {
        axios.get(`${APIurl}users/${username}`)
            .then(res => {
                console.log("status " + res.status);
                localStorage.setItem('logged', 'true');
                localStorage.setItem('username', username);
                setLogin(true);
            })
            .catch(() => {
                console.log("erro");
                cadastrar(username);
            })
    }

    const cadastrar = (username) => {
        axios.post(`${APIurl}users`, { username: username })
            .then(res => {
                console.log(res.status);
                if (res.status == 201) {
                    localStorage.setItem('logged', 'true');
                    localStorage.setItem('username', username);
                    setLogin(true);
                }
            })
    }

    return (
        <Container>
            <img src={logo} alt="Pokemon Logo" style={{ width: '40%' }} />
            <h1>Faça Login</h1>
            <LoginInput type='text' placeholder='Nome de usuário' onChange={(e) => setUsername(e.target.value) }></LoginInput>
            <LoginButton onClick={() => { login(username); }}>Entrar</LoginButton>

        </Container>
    );

}

export default LoginPage;