import {Img, Div} from './styles';
import StyledP from '../StyledP';
import image from "../../assets/profile.png";

function Profile() {

    return(
        <Div className="profile-container" >
            <StyledP>Meu perfil</StyledP>
            <Div className="image-profile-container">
                <Img src={image} alt="profile image"/>
            </Div>
        </Div>
    );
}


export default Profile;