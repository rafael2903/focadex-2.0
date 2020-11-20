import { StyledHeader, StyledLink } from './styles';
import Profile from '../ProfileButton';
import "./styles";

function Header({ username, showProfile = true }) {

    return (
        <StyledHeader>
            <StyledLink to='/' className="header-logo">Pokedex</StyledLink>
            {showProfile ? <Profile username={username} /> : <></>}
        </StyledHeader>
    );
}


export default Header;