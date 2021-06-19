import { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LogOutButton from '../../components/LogOutButton';
import UserDetail from '../../components/UserDetail';
import api from '../../services/api';
import { setFavorites } from '../../store/user';
import { Container, NoFavorites, StyledLink } from './styles';

const Profile = () => {
  const [pokemons, setPokemons] = useState([]);
  const history = useHistory();
  const { username, favorites } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get(`users/${username}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(setFavorites(data.pokemons.map((pokemon) => pokemon.name)));
        setPokemons(data.pokemons);
      });
  }, []);

  function redirect(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <>
      <Header showProfile={false} />
      <main>
        <Container>
          <StyledLink onClick={redirect}>
            <BsArrowLeft color="black" size={35} />
          </StyledLink>
          <UserDetail username={username} />
          <LogOutButton />
          <div className="subtitle">Favoritos</div>
        </Container>

        {favorites.length ? (
          <Cards pokemons={pokemons} />
        ) : (
          <NoFavorites>Você não possui nenhum pokemon favorito :(</NoFavorites>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Profile;
