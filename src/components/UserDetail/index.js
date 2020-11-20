import React from 'react'
import { Container } from './styles'
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