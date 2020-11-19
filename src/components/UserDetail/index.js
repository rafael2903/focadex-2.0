import React from 'react'
import Profile from '../ProfileButton'
import { Container } from './styles'
import LogOutButton from '../../components/LogOutButton'
import ProfilePicture from '../../components/ProfilePicture'
import Title from '../Title'

const UserDetail = ({ username }) => {
    return (
        <Container>
            <Title>Treinador: {username}</Title>
            <ProfilePicture />
        </Container>
    )
}

export default UserDetail;