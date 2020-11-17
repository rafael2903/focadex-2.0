import styled from 'styled-components';
import BlueBox from "../BlueBox";

export const StyledFooter = styled(BlueBox).attrs({as: "footer"})`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
    color: white;
    display: inline-block;
    }

`;

export const StyledLink = styled.a`
    color: white;
`;