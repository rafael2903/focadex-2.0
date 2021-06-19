import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Container = styled.div`
  padding: 30px 30px;
  padding: 0 30px 20px 30px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .subtitle {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

export const NoFavorites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 50px;
`;
