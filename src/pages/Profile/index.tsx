import React from 'react'

import {Container, Main, LeftSide, RightSide} from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () =>{
  return (

    <Container>
      <Main>
      <LeftSide>
        <ProfileData>
          username={'lutero rocha'}
          name={'marcos lutero da silva rocha'}
          avatarUrl={'https://avatars.githubusercontent.com/u/42755539?v=4'}
          followers={887}
          following={7}
          company={'cnpj'}
          location={'Pará, Brazil'}
          email={'marcos09rocha@gmail.com'}
          blog{'undefinided'}
        </ProfileData>

      </LeftSide>

      <RightSide></RightSide>


      </Main>
    </Container>

  );
}

export default Profile;

