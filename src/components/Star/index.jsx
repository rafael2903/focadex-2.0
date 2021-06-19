import { IoIosStar } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { addFavorite, removeFavorite } from '../../store/user';
import { Div } from './styles';

const Star = ({ favorite, pokemonName, size }) => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user);

  function handleClick() {
    if (favorite) {
      api.delete(`users/${username}/starred/${pokemonName}`).then(() => {
        dispatch(removeFavorite(pokemonName));
      });
    } else {
      api.post(`users/${username}/starred/${pokemonName}`).then(() => {
        dispatch(addFavorite(pokemonName));
      });
    }
  }

  return (
    <Div className="star">
      <IoIosStar
        color={favorite ? '#ffd61e' : '#bbb'}
        size={size}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    </Div>
  );
};

export default Star;
