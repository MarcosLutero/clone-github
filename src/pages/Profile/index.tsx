import React from 'react'

import { Container, Main, LeftSide,
   RightSide, Repos} from './styles';

import RepoCard from '../../components/RepoCard'; 

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (

    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'lutero rocha'}
            name={'marcos lutero da silva rocha'}
            avatarUrl={'https://avatars.githubusercontent.com/u/42755539?v=4'}
            followers={887}
            following={7}
            company={'SEGUP'}
            location={'Pará, Brazil'}
            email={'marcos09rocha@gmail.com'}
            blog={'linkedin'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1,2,3,4,5,6].map(n=>(
                <RepoCard
                  key={n}
                  username={'lutero rocha'}
                  reponame={'clonando o github'}
                  description = {'conteiner'}
                  language={n%3 ===0? 'JavaScript': 'Typescript'}
                  stars={8}
                  forks={4}           
                />
              ))}
            </div>
          </Repos>

        </RightSide>


      </Main>
    </Container>

  );
}

export default Profile;

