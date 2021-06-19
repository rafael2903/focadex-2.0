import { useSelector } from 'react-redux';

import Card from '../Card';
import { Itens } from './styles';

const Cards = ({ pokemons }) => {
  const { favorites } = useSelector((state) => state.user);
  return (
    <Itens>
      {pokemons.map((pokemon) => {
        let favorite = false;
        if (favorites.includes(pokemon.name)) favorite = true;

        return <Card key={pokemon.id} pokemon={pokemon} favorite={favorite} />;
      })}
    </Itens>
  );
};

export default Cards;
