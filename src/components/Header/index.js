import {StyledHeader, StyledLink} from './styles';
import Profile from '../Profile';
import {MdKeyboardBackspace} from 'react-icons/md';
import "./styles";

function Header( {username} ) {

    return(
        <StyledHeader>
            {/* <MdKeyboardBackspace size={30} color="#fff"/> */}
            <StyledLink to='/' className="header-logo">Pokedex</StyledLink>
            <Profile username={username} />
        </StyledHeader>      
    );
}


export default Header;