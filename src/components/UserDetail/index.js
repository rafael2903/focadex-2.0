import React from 'react'
import Profile from '../ProfileButton'
import { Container } from './styles'
import LogOutButton from '../../components/LogOutButton'
import ProfilePicture from '../../components/ProfilePicture'

const UserDetail = ({ username }) => {
    return (
        <Container>
            <div>Treinador: {username}</div>
            <ProfilePicture />
        </Container>
    )
}

export default UserDetail;