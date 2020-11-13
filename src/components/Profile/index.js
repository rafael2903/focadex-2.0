import {Img, Div} from './styles';
import StyledP from '../StyledP';
import image from "../../assets/profile.png";
import { Link } from 'react-router-dom'

function Profile( {username} ) {

    return(
        <Div className="profile-container" >
            <Link to={"/users/" + username}><StyledP>Meu perfil</StyledP></Link>
            <Div className="image-profile-container">
                <Img src={image} alt="profile image"/>
            </Div>
        </Div>
    );
}

export default Profile;