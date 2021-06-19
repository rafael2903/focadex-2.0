import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import image from '../../assets/profile.png';
import { Img, Div } from './styles';

const Profile = () => {
  const { username } = useSelector((state) => state.user);

  return (
    <Div className="profile-container">
      <Link to={`/users/${username}`}>
        <p className="profile">Meu perfil</p>
      </Link>
      <Link to={`/users/${username}`}>
        <Div className="image-profile-container">
          <Img src={image} alt="profile image" />
        </Div>
      </Link>
    </Div>
  );
};

export default Profile;
