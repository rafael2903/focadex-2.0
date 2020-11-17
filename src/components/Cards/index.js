import Card from '../Card';
import {Itens} from './styles';

function Cards( {pokemons, favorites} ) {

    return (
        <Itens>
        {pokemons.map( (pokemon) => {
            
            var favorite = false;
            if (favorites.includes(pokemon.name)) 
                favorite = true;

            return <Card key={pokemon.id} pokemon={pokemon} favorite />
        })}
        </Itens>
    );
};

export default Cards;
