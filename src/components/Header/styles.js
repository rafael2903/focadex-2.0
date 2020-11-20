import styled from 'styled-components';
import BlueBox from "../BlueBox";
import {Link} from 'react-router-dom';

export const StyledHeader = styled(BlueBox).attrs({as: "header"})`
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const StyledLink = styled(Link)`
        color: white;
        font-family: 'Orbitron', sans-serif;
        font-weight: 500;
        display: inline-block;
        font-size: 48px;
        text-decoration: none;

        @media(max-width: 530px) {

            & {
                font-size: 42px;
            }
        }

`;