import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Container, NoFavorites, StyledLink } from './styles'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import UserDetail from '../../components/UserDetail'
import Cards from '../../components/Cards'

import { BsArrowLeft } from "react-icons/bs";
import LogOutButton from '../../components/LogOutButton';

const Profile = ({ username, setLogin, backgroundColors }) => {

    const [pokemons, setPokemons] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const history = useHistory();


    useEffect(() => {
        axios
            .get(`https://pokedex20201.herokuapp.com/users/${username}`)
            .then((response) => response.data)
            .then((data) => {
                setFavorites(data.pokemons.map(pokemon => pokemon.name));
                setPokemons(data.pokemons);

            })
    }, [username]);

    function redirect(e) {
        e.preventDefault();
        history.goBack();
    }

    return (
        <>
            <Header showProfile={false} />
            <main>

                <Container>
                    <StyledLink onClick={redirect} ><BsArrowLeft color="black" size={35} /></StyledLink>
                    <UserDetail username={username}></UserDetail>
                    <LogOutButton setLogin={setLogin} />
                    <div className="subtitle" >Favoritos</div>
                </Container>
                {favorites.length ?
                    <Cards pokemons={pokemons} favorites={favorites} backgroundColors={backgroundColors} username={username} setFavorites={setFavorites} />
                    : <NoFavorites>Você não possui nenhum pokemon favorito :(</NoFavorites>
                }
            </main>
            <Footer />
        </>
    );
}

export default Profile
