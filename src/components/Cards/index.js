import Card from '../Card';

function Cards( {pokemons} ) {

    return (
        <ul>
        {pokemons.map( (pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
        ))}
        </ul>
    );
};

export default Cards;
