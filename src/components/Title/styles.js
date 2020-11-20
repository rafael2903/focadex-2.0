import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 50px;
    font-family: Archivo, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    text-align: center;
    width: auto;
    margin: 0 auto 40px auto;
    text-transform: capitalize;

    @media(max-width: 530px) {

        & {

            font-size: 40px;
        }
    }
`;
