import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  height: 50%;
  width: 100%;
`;

export const Container = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px 15px 0 0;
  background-color: ${({ kind, theme }) => theme.backgroundColors[kind[0]]};

  &:hover {
    filter: brightness(90%);
  }
`;

export const Div = styled.div`
  &.img-container {
    width: 70px;
    height: 70px;
    background-color: #ececec;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &.name-container {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.bottom {
    height: 50%;
    background-color: #ececec;
    border-radius: 0 0 15px 15px;
  }

  p.name {
    color: black;
    text-transform: capitalize;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Item = styled.li`
  width: 140px;
  height: 200px;
  border-radius: 15px;
  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.25);
  list-style: none;
  margin-bottom: 20px;
`;
