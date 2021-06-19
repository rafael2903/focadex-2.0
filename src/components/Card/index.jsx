/* eslint-disable camelcase */
import Kinds from '../Kinds';
import Star from '../Star';
import { Img, Div, Container, Item, StyledLink } from './styles';

const Card = ({
  pokemon: { image_url, name, kind },
  favorite,
  username,
  setFavorites
}) => {
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
        <Star
          username={username}
          size={25}
          favorite={favorite}
          name={name}
          setFavorites={setFavorites}
        />
      </Div>
    </Item>
  );
};

export default Card;
