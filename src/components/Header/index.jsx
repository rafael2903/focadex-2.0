import Profile from '../ProfileButton';
import { StyledHeader, StyledLink } from './styles';

const Header = ({ showProfile = true }) => {
  return (
    <StyledHeader>
      <StyledLink to="/" className="header-logo">
        Pokedex
      </StyledLink>
      {showProfile ? <Profile /> : <></>}
    </StyledHeader>
  );
};

export default Header;
