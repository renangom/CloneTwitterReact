import React from 'react';
import { 
    Container,
    Banner,
    Avatar,
    ProfileData, 
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
      <Container>
            <Banner>
              <Avatar />
            </Banner>
            <ProfileData>
              <EditButton outlined> Editar Perfil </EditButton>
                <h1> Renan Lopes </h1>
                <h2>@renan23lopes</h2>
                <p>
                    Físico e Lindo
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 23 de Dezembro de 2000
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong> 94 </strong>
                    </span>
                    <span>
                        <strong>130 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
      </Container>
  );
}

export default ProfilePage;