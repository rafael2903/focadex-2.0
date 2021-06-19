import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Title from '../../components/Title';

const Home = ({ username, pokemons, favorites, setFavorites }) => {
  return (
    <>
      <Header username={username} />
      <main>
        <Title>Pokemons</Title>
        <Cards
          pokemons={pokemons}
          favorites={favorites}
          username={username}
          setFavorites={setFavorites}
        />
      </main>
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
