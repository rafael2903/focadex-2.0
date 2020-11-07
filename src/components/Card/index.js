import {Img, Div} from './styles';
import {IoIosStar} from 'react-icons/io';

function Card( {image_url, name, number, kind} ) {

    return(
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
    );
}


export default card;