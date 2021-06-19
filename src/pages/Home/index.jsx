import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import Title from '../../components/Title';
import api from '../../services/api';
import { setPrevPage, setNextPage } from '../../store/pagination';
import { setFavorites } from '../../store/user';

const Home = () => {
  const { username } = useSelector((state) => state.user);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currentPage } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    api
      .get(`pokemons?page=${currentPage}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(setPrevPage(data.prev_page));
        dispatch(setNextPage(data.next_page));
        setPokemons(data.data);
        setLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    api
      .get(`users/${username}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(setFavorites(data.pokemons.map((pokemon) => pokemon.name)));
      });
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <main>
            <Title>Pokemons</Title>
            <Cards pokemons={pokemons} />
          </main>
          <Pagination />
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;
