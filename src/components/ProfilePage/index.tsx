import React from 'react';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Edital perfil</EditButton>
                <h1>Felipe Furlanetti</h1>
                <h2>@furlanetti</h2>

                <p>Teste de texto</p>

                <ul>
                    <li>
                        <LocationIcon /> São Paulo
                    </li>
                    <li>
                        <CakeIcon /> Nascido em 20/10/1993
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>120</strong>
                    </span>
                    <span>
                        <strong>300</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
};

export default ProfilePage;
