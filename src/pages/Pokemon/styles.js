import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledLink = styled(Link)`

    position: absolute;
    top: 10px;
    left: 10px;

`;

export const Subtitle = styled.h2`
    font-size: 30px;
    font-weight: 400;
    transform: translate(0,-30px);
    color: #777;
`;

export const Container = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width:800px) {

        & {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

    }
`;

export const ImgContainer = styled.div`

    width: 300px;
    height: 300px;
    background-color: #ECECEC;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
    }

    @media(max-width:450px) {
        width: 240px;
        height: 240px;
    }
`;

export const AboutContainer = styled.div`

    width: 38%;
    min-width: 300px;
    max-width: 360px;
    height: 220px;
    background-color: #ECECEC;
    border-radius: 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media(max-width:800px) {

        margin: 30px 0;
        min-width: 350px;
    }

    @media(max-width:450px) {
        min-width: 250px;
    }

`;

export const About = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & p {
        display: inline-block;
        width: auto;
        font-size: 18px;

        @media(max-width:450px) {
            
            font-size: 16px;
        }
    }
`;