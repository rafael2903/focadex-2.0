import React from 'react';
import { Link } from 'react-router-dom';

import { RedButton } from './styles';

const LogOutButton = ({ setLoggedIn }) => {
  const logOut = () => {
    localStorage.removeItem('logged');
    localStorage.removeItem('username');
    setLoggedIn(false);
  };

  return (
    <Link to="/login">
      <RedButton onClick={logOut}>Sair</RedButton>
    </Link>
  );
};

export default LogOutButton;
