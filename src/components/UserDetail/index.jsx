import React from 'react';

import ProfilePicture from '../ProfilePicture';
import Title from '../Title';
import { Container } from './styles';

const UserDetail = ({ username }) => {
  return (
    <Container>
      <Title>Treinador: {username}</Title>
      <ProfilePicture />
    </Container>
  );
};

export default UserDetail;
