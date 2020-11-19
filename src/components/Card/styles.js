import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
    background-color: ${ ({kind, backgroundColors}) => backgroundColors[kind[0]]};

    &:hover {
        filter: brightness(90%)
    }
    
`;

export const Div = styled.div`

    
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
        background-color: #ECECEC;
        border-radius: 0 0 15px 15px;

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
    box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.25);
    list-style: none;
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
    font-size: 14px;
    font-weight: 500;
    border-radius: 7px;
    padding: 3px 5px;
    text-align: center;
    text-shadow: 0 0 1px #c3c3c3;
    background-color: ${ ({children, backgroundColors}) => backgroundColors[children]};
    

`;