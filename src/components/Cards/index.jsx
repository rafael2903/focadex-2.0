import Card from '../Card';
import { Itens } from './styles';

const Cards = ({ pokemons, favorites, username, setFavorites }) => {
  return (
    <Itens>
      {pokemons.map((pokemon) => {
        let favorite = false;
        if (favorites.includes(pokemon.name)) favorite = true;

        return (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            favorite={favorite}
            username={username}
            setFavorites={setFavorites}
          />
        );
      })}
    </Itens>
  );
};

export default Cards;
