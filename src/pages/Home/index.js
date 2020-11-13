import Header from "../../components/Header";
import Main from "../../components/Main";
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

    useEffect( ()=> {
        axios
        .get(`https://pokedex20201.herokuapp.com/pokemons?page=1`)
        .then( (response) => response.data)
        .then( (data) => {
            setPrevPage(data.prev_page);
            setNextPage(data.next_page);
            setPokemons(data.data);
        })

    },[current_page])

    return (
        <>
            <Header username={username} />
            <Main>
                <Title>Pokemons</Title>
                <Cards pokemons={pokemons} />
                {/* <Pagination current_page setCurrentPage /> */}
            </Main>
            <Footer />
        </>
    );
}