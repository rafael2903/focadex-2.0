import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Container, NoFavorites, StyledLink } from './styles'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import UserDetail from '../../components/UserDetail'
import Cards from '../../components/Cards'

import { BsArrowLeft } from "react-icons/bs";
import LogOutButton from '../../components/LogOutButton';

const Profile = ({ username, setLogin }) => {

    const [pokemons, setPokemons] = useState([]);
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        axios
            .get(`https://pokedex20201.herokuapp.com/users/${username}`)
            .then((response) => response.data)
            .then((data) => {
                setFavorites(data.pokemons.map(pokemon => pokemon.name));
                setPokemons(data.pokemons);
                console.log("Pokemons: ", pokemons)
                console.log("Favoritos: ", favorites)
            })
    }, [favorites]);

    const backgroundColors = {

        bug: "#7ED578",
        electric: "#FFF34B",
        fairy: "#FF7EE5",
        fighting: "#F17373",
        fire: "#FFB433",
        flying: "#D7F1E9",
        ghost: "#E2E2E2",
        grass: "#5EFF53",
        ground: "#AA8546",
        ice: "#AEE3FB",
        normal: "#D7DBA8",
        poison: "#CE52F9",
        psychic: "#FFC157",
        rock: "#757575",
        steel: "#A1A1A1",
        water: "#7192FF",
        dragon: "#43372D",
    }

    return (
        <>
            <Header showProfile={false} />
            <main>

            <Container>
                {/* <div style={{ width: '100%' }}> */}
                    <StyledLink to='/'>
                        <BsArrowLeft  color="black" size={35}/>
                    </StyledLink>
                {/* </div> */}
                <UserDetail username={username}></UserDetail>
                <LogOutButton setLogin={setLogin} />
                <div className="subtitle" >Favoritos</div>
            </Container>
            { favorites.length ?
                <Cards pokemons={pokemons} favorites={favorites} backgroundColors={backgroundColors} username={username} setFavorites={setFavorites} />
                : <NoFavorites>Você não possui nenhum pokemon favorito :(</NoFavorites>
                }
                </main>
            <Footer />
        </>
    );
}

export default Profile