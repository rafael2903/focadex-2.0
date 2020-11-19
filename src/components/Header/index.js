import { StyledHeader } from './styles';
import Profile from '../ProfileButton';
import { MdKeyboardBackspace } from 'react-icons/md';
import "./styles";

function Header({ username, showProfile = true }) {

    return (
        <StyledHeader>
            {/* <MdKeyboardBackspace size={30} color="#fff"/> */}
            <p className="header-logo">Pokedex</p>
            {showProfile ? <Profile username={username} /> : <></>}
        </StyledHeader>
    );
}


export default Header;