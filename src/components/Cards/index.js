import Card from '../Card';
import {Itens} from './styles';

function Cards( {pokemons} ) {

    return (
        <Itens>
        {pokemons.map( (pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
        ))}
        </Itens>
    );
};

export default Cards;
