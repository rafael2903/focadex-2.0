import { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Kinds from '../../components/Kinds';
import Star from '../../components/Star';
import Title from '../../components/Title';
import api from '../../services/api';
import {
  StyledLink,
  Subtitle,
  Container,
  AboutContainer,
  About,
  ImgContainer
} from './styles';

const Pokemon = ({ username }) => {
  const [pokemon, setPokemon] = useState();
  const { favorites } = useSelector((state) => state.user);
  const { name } = useParams();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`pokemons/${name}`)
      .then((response) => response.data)
      .then((data) => setPokemon(data));
    window.scrollTo(0, 0);
  }, [name]);

  function redirect(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <div className="container">
      <Header username={username} />

      <main>
        {!pokemon ? (
          <p className="loading">carregando...</p>
        ) : (
          <>
            <StyledLink onClick={redirect}>
              <BsArrowLeft color="black" size={35} />
            </StyledLink>

            <Title>{pokemon.name}</Title>
            <Subtitle>Nº {pokemon.number}</Subtitle>

            <Container>
              <ImgContainer>
                <img src={pokemon.image_url} alt="Imagem do pokemon" />
              </ImgContainer>
              <AboutContainer>
                <About>
                  <p>Peso: {pokemon.weight} Kg</p>
                  <p>Altura: {pokemon.height} m</p>
                </About>
                <Kinds kinds={pokemon.kind} size={20} />
                <Star
                  size={32}
                  favorite={favorites.includes(pokemon.name)}
                  username={username}
                  pokemonName={pokemon.name}
                />
              </AboutContainer>
            </Container>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Pokemon;
