import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import axios from 'axios';
import { useState, useEffect } from "react";
import {StyledLink} from './styles';
import {useParams} from 'react-router-dom';

export default function Pokemon( {username} ) {

    const params = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect( () => {
        axios.get(`https://pokedex20201.herokuapp.com/pokemons/${params.name}`)
        .then((response) => response.data)
        .then((data) => setPokemon(data));
        window.scrollTo(0, 0);
    },[]);

    console.log(pokemon);

    return (  
        <div className='container'>          
        <Header username={username} />
        
        <main>{pokemon == null ? (<p className="loading">carregando...</p>) : (
            <>
            <StyledLink to="/"><BsArrowLeft  color="black" size={35}/></StyledLink>
            <Title>{pokemon.name}</Title>
            </>
        )}
        </main>

        <Footer />
        </div>
    );
}