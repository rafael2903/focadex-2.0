import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";

import axios from 'axios';
import { useState, useEffect } from "react";

export default function Home( {username}) {

    const [prev_page,setPrevPage] = useState();
    const [current_page,setCurrentPage] = useState(1);
    const [next_page,setNextPage] = useState();
    const [pokemons,setPokemons] = useState([]);
    const [favorites,setFavorites] = useState([])

    useEffect( ()=> {
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

    },[])


    const backgroundColors = {

        bug: 2,
        electric: 2,
        fairy: 2,
        fighting: 2,
        fire: 2,
        flying: 2,
        ghost: 2,
        grass: 2,
        ground: 2,
        ice: 2,
        normal: 2,
        poison: 2,
        psychic: 2,
        rock: 2,
        steel: 2,
        water: 2,
    
    }


    return (
        <>
            <Header username={username} />
            <main>
                <Title>Pokemons</Title>
                <Cards pokemons={pokemons} favorites={favorites} />
                {/* <Pagination current_page setCurrentPage /> */}
            </main>
            <Footer />
        </>
    );
}