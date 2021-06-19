import logo from '../../assets/logoPokemon.png';
import api from '../../services/api';
import { Container, LoginInput, LoginButton } from './styles';

const LoginPage = ({ username, setUsername, setLoggedIn }) => {
  const cadastrar = () => {
    api.post('users', { username }).then((res) => {
      if (res.status === 201) {
        localStorage.setItem('logged', 'true');
        localStorage.setItem('username', username);
        setUsername(username);
        setLoggedIn(true);
      }
    });
  };

  const login = (e) => {
    e.preventDefault();
    api
      .get(`users/${username}`)
      .then(() => {
        localStorage.setItem('logged', 'true');
        localStorage.setItem('username', username);
        setUsername(username);
        setLoggedIn(true);
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

export default LoginPage;
