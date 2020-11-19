import { Container, LoginInput, LoginButton } from './styles'
import logo from '../../assets/logoPokemon.png';
import axios from 'axios';

const APIurl = 'https://pokedex20201.herokuapp.com/';


const LoginPage = ({ username, setUsername, setLogin }) => {

    const login = (e) => {
        e.preventDefault();
        axios.get(`${APIurl}users/${username}`)
            .then(res => {
                console.log("status " + res.status);
                localStorage.setItem('logged', 'true');
                localStorage.setItem('username', username);
                setUsername(username);
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
                    setUsername(username);
                    setLogin(true);
                }
            })
    }

    return (
        <Container>
            <div>
                <img src={logo} alt="Pokemon Logo" style={{maxWidth: '100%',maxHeight: '100%'}} />
            </div>
            <h1>Faça Login</h1>
            <form onSubmit={login}>
                <LoginInput type='text' placeholder='Nome de usuário' onChange={(e) => setUsername(e.target.value)}></LoginInput>
                <LoginButton type='submit'>Entrar</LoginButton>
            </form>
        </Container>
    );

}

export default LoginPage;