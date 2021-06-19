import picture from '../../assets/profile.png';
import { Frame } from './styles';

const ProfilePicture = () => {
  return (
    <Frame>
      <img src={picture} width="150px" alt="imagem do treinador" />
    </Frame>
  );
};

export default ProfilePicture;
