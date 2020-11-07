import React from 'react';
import { Container, LoginInput, LoginButton } from './styles'
import logo from '../../assets/logoPokemon.png';

const LoginPage = () => {

    return (
        <Container>
            <img src={logo} alt="Pokemon Logo" style={{ width: '40%' }} />
            <h1>Faça Login</h1>
            <LoginInput type='text' placeholder='Nome de usuário'></LoginInput>
            <LoginButton>Entrar</LoginButton>
        </Container>
    );

}

export default LoginPage;