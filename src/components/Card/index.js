import {Img, Div} from './styles';
import {IoIosStar} from 'react-icons/io';

function Card( {pokemon: {image_url, name, number, kind}} ) {

    return(
        <Link to={"/pokemons/" + name}>
            <Li>
                <Div>
                    <Div>
                        <Img src={image_url} />
                    </Div>
                </Div>
                <Div>
                    <P className="name">{name}</P>
                    <Ul>

                    </Ul>
                    <IoIosStar color="FFE81E"/>
                </Div>
            </Li>
        </Link>
    );
}

export default card;