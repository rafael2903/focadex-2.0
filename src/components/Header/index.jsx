import Profile from '../ProfileButton';
import { StyledHeader, StyledLink } from './styles';

const Header = ({ username, showProfile = true }) => {
  return (
    <StyledHeader>
      <StyledLink to="/" className="header-logo">
        Pokedex
      </StyledLink>
      {showProfile ? <Profile username={username} /> : <></>}
    </StyledHeader>
  );
};

export default Header;
