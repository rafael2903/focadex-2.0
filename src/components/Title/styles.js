import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 50px;
    font-family: Archivo, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    text-align: center;
    width: auto;
    margin: 30px auto 40px auto;
    /* border-bottom: 2px solid black; */

    @media(max-width: 530px) {

        & {

            font-size: 42px;
        }
    }
`;
