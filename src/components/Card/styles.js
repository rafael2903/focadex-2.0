import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const Div = styled.div`
    
    &.top {
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    &.img-container {
        width: 70px;
        height: 70px;
        background-color: #ECECEC;
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
    }

    &.star {
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    list-style: none;
    background: linear-gradient(#4ba6db 50%, #ECECEC 50%);
    margin-bottom: 20px;
`;

export const Kinds= styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30%;

`;

export const Kind = styled.li`
    color: white;
    display: inline-block;

`;