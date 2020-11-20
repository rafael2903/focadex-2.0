import {Div} from './styles';
import {IoIosStar} from 'react-icons/io';
import axios from 'axios';


export default function Star( {favorite,username,name,setFavorites, size}) {

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
    
    return (
        <Div className="star">
            <IoIosStar color={favorite? "#ffd61e" : "#bbb"} size={size} onClick={handleClick} style={{cursor: "pointer"}}/> 
        </Div>
    );
}