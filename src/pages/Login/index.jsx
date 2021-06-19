import { useState } from 'react';
import { useDispatch } from 'react-redux';

import logo from '../../assets/logoPokemon.png';
import api from '../../services/api';
import { setUser } from '../../store/user';
import { Container, LoginInput, LoginButton } from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const cadastrar = () => {
    api.post('users', { username }).then((res) => {
      if (res.status === 201) {
        dispatch(setUser(username));
      }
    });
  };

  const login = (e) => {
    e.preventDefault();
    api
      .get(`users/${username}`)
      .then(() => {
        dispatch(setUser(username));
      })
      .catch(() => {
        cadastrar();
      });
  };

  return (
    <Container>
      <div>
        <img
          src={logo}
          alt="Pokemon Logo"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
      <h1>Faça Login</h1>
      <form onSubmit={login}>
        <LoginInput
          type="text"
          placeholder="Nome de usuário"
          onChange={({ target }) => setUsername(target.value)}
        />
        <LoginButton type="submit">Entrar</LoginButton>
      </form>
    </Container>
  );
};

export default Login;
