import {Img, Div, Container, Item, StyledLink, Kind, Kinds} from './styles';
import {IoIosStar} from 'react-icons/io';
import axios from 'axios';

function Card( {pokemon: {image_url, name, kind}, backgroundColors, favorite, username, setFavorites } ) {

    kind = kind.split(";");


    function handleClick() {
    
        if( favorite ){
            axios.delete(`https://pokedex20201.herokuapp.com/users/${username}/starred/${name}`)
            .then( () => {
                setFavorites( previous => {
                    previous.splice(previous.indexOf(name),1);
                    return previous;
                });
            });
            
        }else{
            axios.post(`https://pokedex20201.herokuapp.com/users/${username}/starred/${name}`)
            .then( () => {
                setFavorites( previous => [...previous,name] );
            });
            
        }
    }


    return(
        
            <Item className="item">  
                <StyledLink to={"/pokemons/" + name}>
                    <Container kind={kind} backgroundColors={backgroundColors}>
                        <Div className='img-container'>
                            <Img src={image_url} />
                        </Div>
                    </Container>
                </StyledLink>
                <Div className='bottom'>
                    <Div className="name-container">
                        <p className="name">{name}</p> 
                    </Div>
                    <Kinds>
                        {kind.map( (kind) => (
                            <Kind key={kind} backgroundColors={backgroundColors}>{kind}</Kind>
                        ))}
                    </Kinds>
                    <Div className="star">
                        <IoIosStar color={favorite? "#ffd61e" : "#bbb"} size={25} onClick={handleClick} style={{cursor: "pointer"}}/> 
                    </Div>
                </Div>
            </Item>
    );
}


export default Card;