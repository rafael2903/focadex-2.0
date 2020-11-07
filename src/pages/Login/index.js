import React, { useState } from 'react';
import { Container, LoginInput, LoginButton } from './styles'
import logo from '../../assets/logoPokemon.png';
import axios from 'axios';

const APIurl = 'https://pokedex20201.herokuapp.com/';

function login(username) {
    console.log(username);
    axios.get(`${APIurl}users/${username}`)
        .then(res => {
            console.log("status " + res.status);
            /* localStorage.setItem('logged');
            localStorage.setItem('username', username); */
        })
        .catch(() => { cadastrar(username) });
}

function cadastrar(username) {
    axios.post(`${APIurl}users`, { username: username })
        .then(res => {
            console.log(res.status);
        })
}

const LoginPage = () => {

    const [username, setUsername] = useState({});

    return (
        <Container>
            <img src={logo} alt="Pokemon Logo" style={{ width: '40%' }} />
            <h1>Faça Login</h1>
            <LoginInput type='text' placeholder='Nome de usuário' onChange={(e) => setUsername(e.target.value)}></LoginInput>
            <LoginButton onClick={() => login(username)}>Entrar</LoginButton>
        </Container>
    );

}

export default LoginPage;