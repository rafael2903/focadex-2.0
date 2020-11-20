import {StyledFooter, StyledLink} from './styles';

function Footer() {

    return(
        <>
            <StyledFooter>
                <p>
                    Desenvolvido por <StyledLink href="https://github.com/igortaquary">Igor</StyledLink> e <StyledLink href="https://github.com/rafael2903">Rafael</StyledLink>
                </p>
            </StyledFooter>
        </>
    );
}

export default Footer;