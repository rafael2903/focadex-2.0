import {Img, Div} from './styles';
import image from "../../assets/profile.png";
import { Link } from 'react-router-dom'

function Profile( {username} ) {

    return(
        <Div className="profile-container" >
            <Link to={"/users/" + username}><p className="profile">Meu perfil</p></Link>
            <Link to={"/users/" + username}>
                <Div className="image-profile-container">
                    <Img src={image} alt="profile image"/>
                </Div>
            </Link>
        </Div>
    );
}

export default Profile;