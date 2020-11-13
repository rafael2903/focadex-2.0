import {Img, Div, Item} from './styles';
import {IoIosStar} from 'react-icons/io';
import {Link} from 'react-router-dom';

function Card( {pokemon: {image_url, name, number, kind}} ) {

    return(
        <Link to={"/pokemons/" + name}>
            <Item>  
                <Div className='top'>
                    <Div className='img-container'>
                        <Img src={image_url} />
                    </Div>
                </Div>
                <Div className='bottom'>
                    <p className="name">{name}</p> 
                    {/* <Ul> */}

                    {/* </Ul> */}
                    <IoIosStar color="FFE81E"/>
                </Div>
            </Item>
        </Link>
    );
}

export default Card;