import React from 'react';
import { Container } from 'react-bootstrap';
import appStyles from '../../App.module.css';
import Asset from '../../components/Asset';
import { useProfileData } from '../../contexts/ProfileDataContext';
import Profile from './Profile';

const PopularProfiles = () => {

    const {popularProfiles} = useProfileData();
  return (
    <Container className={`${appStyles.Content} mb-3`}>
        {popularProfiles.results.length ? (
            <>
                <h4 className='text-center'>Our Top Organisers</h4>
                {popularProfiles.results.slice(0,6).map((profile) => (
                    <Container key={profile.id} className='d-inline justify-content-center align-items-center'>
                        <Profile profile={profile} mobile />
                    </Container>                   
                ))}
            </>    
        ) : (
            <Asset spinner />
        )}
        
    </Container>

   
  )
}

export default PopularProfiles