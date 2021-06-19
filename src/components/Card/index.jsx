/* eslint-disable camelcase */
import Kinds from '../Kinds';
import Star from '../Star';
import { Img, Div, Container, Item, StyledLink } from './styles';

const Card = ({ pokemon: { image_url, name, kind }, favorite }) => {
  return (
    <Item className="item">
      <StyledLink to={`/pokemons/${name}`}>
        <Container kind={kind.split(';')}>
          <Div className="img-container">
            <Img src={image_url} />
          </Div>
        </Container>
      </StyledLink>

      <Div className="bottom">
        <Div className="name-container">
          <p className="name">{name}</p>
        </Div>
        <Kinds kinds={kind} size={15} />
        <Star size={25} favorite={favorite} pokemonName={name} />
      </Div>
    </Item>
  );
};

export default Card;
