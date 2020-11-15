import {Img, Div, Item, StyledLink, Kind, Kinds} from './styles';
import {IoIosStar} from 'react-icons/io';

function Card( {pokemon: {image_url, name, kind}} ) {

    kind = kind.split(";");

    return(
        <StyledLink to={"/pokemons/" + name}>
            <Item>  
                <Div className='top'>
                    <Div className='img-container'>
                        <Img src={image_url} />
                    </Div>
                </Div>
                <Div className='bottom'>
                    <Div className="name-container">
                        <p className="name">{name}</p> 
                    </Div>
                    <Kinds>
                        {kind.map( (kind) => (
                            <Kind key={kind}>{kind}</Kind>
                        ))}
                    </Kinds>
                    <Div className="star">
                        <IoIosStar color="FFE81E" size={24}/> 
                    </Div>
                </Div>
            </Item>
        </StyledLink>
    );
}


export default Card;