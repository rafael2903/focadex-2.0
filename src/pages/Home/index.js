import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";

import axios from 'axios';
import { useState, useEffect } from "react";

export default function Home( {username}) {

    const [prev_page,setPrevPage] = useState();
    const [current_page,setCurrentPage] = useState(1);
    const [next_page,setNextPage] = useState();
    const [pokemons,setPokemons] = useState([]);
    const [favorites,setFavorites] = useState([])

    useEffect( () => {
        axios
        .get(`https://pokedex20201.herokuapp.com/pokemons?page=${current_page}`)
        .then( (response) => response.data)
        .then( (data) => {
            setPrevPage(data.prev_page);
            setNextPage(data.next_page);
            setPokemons(data.data);
        })

    },[current_page])

    useEffect( ()=> {
        axios
        .get(`https://pokedex20201.herokuapp.com/users/${username}`)
        .then( (response) => response.data)
        .then( (data) => {
            setFavorites(data.pokemons.map(pokemon => pokemon.name));
            
        })

    },[favorites])


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
            <Header username={username} />
            <main>
                <Title>Pokemons</Title>
                <Cards pokemons={pokemons} favorites={favorites} backgroundColors={backgroundColors} username={username} setFavorites={setFavorites}/>
            </main>
                <Pagination prev_page={prev_page} current_page={current_page} setCurrentPage={setCurrentPage} next_page={next_page} />
            <Footer />
        </>
    );
}