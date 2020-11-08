import {StyledHeader} from './styles';
import Profile from '../Profile';
import {MdKeyboardBackspace} from 'react-icons/md';
import "./styles";

function Header( {username} ) {

    return(
        <StyledHeader>
            <MdKeyboardBackspace size={30} color="#fff"/>
            <p className="header-logo">Pokedex</p>
            <Profile username/>
        </StyledHeader>      
    );
}


export default Header;