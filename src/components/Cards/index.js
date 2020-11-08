
function Cards( {pokemons} ) {

    return (
        <ul>
        {pokemons.map( (pokemon) => (
            <Card key={pokemon.id} pokemon/>
        ))}
        </ul>
    );
};

export default Cards;
