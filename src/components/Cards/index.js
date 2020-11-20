import Card from '../Card';
import {Itens} from './styles';

function Cards( {pokemons, favorites, backgroundColors, username, setFavorites} ) {

    return (
        <Itens>
        {pokemons.map( (pokemon) => {
            
            var favorite = false;
            if (favorites.includes(pokemon.name)) 
                favorite = true;
            
            return <Card key={pokemon.id} pokemon={pokemon} backgroundColors={backgroundColors} favorite={favorite} username={username} setFavorites={setFavorites} />;
        })}
        </Itens>
    );
};

export default Cards;
