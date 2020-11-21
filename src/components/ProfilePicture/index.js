import React from 'react'
import { Frame } from './styles'

import picture from '../../assets/profile.png'

const ProfilePicture = () => {
    return (
        <Frame>
            <img src={picture} alt="Foto de perfil" width='150px' />
        </Frame>
    )
}

export default ProfilePicture