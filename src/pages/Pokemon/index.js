import {StyledLink, Subtitle, Container, AboutContainer, About, ImgContainer} from './styles';
import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import Kinds from '../../components/Kinds';
import { BsArrowLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function Pokemon( {username,favorites,pokemons,backgroundColors,setFavorites}) {

    const params = useParams();
    const [pokemon, setPokemon] = useState();
    var favorite = false;


    useEffect( () => {
        axios.get(`https://pokedex20201.herokuapp.com/pokemons/${params.name}`)
        .then((response) => response.data)
        .then((data) => setPokemon(data));
        window.scrollTo(0, 0);

    },[params]);
    

    return (  
        <div className='container'>          
        <Header username={username} />
        
        <main>{pokemon == null ? (<p className="loading">carregando...</p>) : (
            <>
            {favorites.includes(pokemon.name) ? favorite = true : false}
            
            <StyledLink to="/"><BsArrowLeft  color="black" size={35}/></StyledLink>
            <Title>{pokemon.name}</Title>
            <Subtitle>Nº {pokemon.number}</Subtitle>
            <Container>
                <ImgContainer>
                    <img src={pokemon.image_url} />
                </ImgContainer>
                <AboutContainer>
                    <About>
                        <p>Peso: {pokemon.weight}Kg</p>
                        <p>Altura: {pokemon.height}m</p>
                    </About>
                    <Kinds kind={pokemon.kind} backgroundColors={backgroundColors} size={20} />
                    <Star size ={32} favorite={favorite} username ={username} name={pokemon.name} setFavorites={setFavorites}/>
                </AboutContainer>
            </Container>
            </>
        )}
        </main>

        <Footer />
        </div>
    );
}