import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOut } from '../../store/user';
import { RedButton } from './styles';

const LogOutButton = () => {
  const dispatch = useDispatch();

  return (
    <Link to="/login">
      <RedButton onClick={() => dispatch(logOut())}>Sair</RedButton>
    </Link>
  );
};

export default LogOutButton;
