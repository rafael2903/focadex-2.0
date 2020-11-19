import React from 'react'
import Profile from '../ProfileButton'
import { Container, ProfilePicture } from './styles'
import LogOutButton from '../../components/LogOutButton'

const UserDetail = ({ username }) => {
    return (
        <Container>
            <div>Treinador: {username}</div>
            <ProfilePicture />
        </Container>
    )
}

export default UserDetail;