import {StyledFooter, StyledLink} from './styles';
import StyledP from '../StyledP';


function Footer() {

    return(
        <>
            <StyledFooter>
                <StyledP>
                    Desenvolvido por <StyledLink href="#">Igor</StyledLink> e <StyledLink href="https://github.com/rafael2903">Rafael</StyledLink>
                </StyledP>
            </StyledFooter>
        </>
    );
}


export default Footer;