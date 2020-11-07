import {StyledHeader} from './styles';
import Profile from '../Profile';
import {MdKeyboardBackspace} from 'react-icons/md';
import "./styles";

function Header() {

    return(
        <StyledHeader>
            <MdKeyboardBackspace size={30} color="#fff"/>
            <Profile/>
        </StyledHeader>      
    );
}


export default Header;