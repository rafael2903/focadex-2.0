import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Container } from './styles'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import UserDetail from '../../components/UserDetail'

import { MdArrowBack } from 'react-icons/md'
import LogOutButton from '../../components/LogOutButton';

const Profile = ({ username, setLogin }) => {

    return (
        <>
            <Header showProfile={false} />
            <Container>
                <div style={{ width: '100%' }}>
                    <Link to='/'>
                        <MdArrowBack />
                    </Link>
                </div>
                <UserDetail username={username}></UserDetail>
                <LogOutButton setLogin={setLogin} />
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Profile