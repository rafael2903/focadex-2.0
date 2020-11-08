import Header from "../../components/Header";
import Main from "../../components/Main";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import axios from 'axios';
import { useState } from "react";

export default function Home( {username}) {

    const [prev_page,setPrevPage] = useState();
    const [current_page,setCurrentPage] = useState(1);
    const [next_page,setNextPage] = useState();
    const [pokemons,setPokemons] = useState();

    useEffect( ()=> {
        axios
        .get(`https://pokedex20201.herokuapp.com/pokemons?page=${current_page}`)
        .then( (response) => response.data)
        .then( (data) => {
            setPrevPage(data.prev_page);
            setNextPage(data.next_page);
            setPokemons(data.data)
        })

    },[current_page])

    
    return (
        <>
            <Header username/>
            <Main>
                <Title>Pokemons</Title>
                <Cards pokemons />
                <Pagination current_page setCurrentPage />
            </Main>
            <Footer />
        </>
    );
}