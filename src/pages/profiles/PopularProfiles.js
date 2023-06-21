import React from 'react';
import { Container } from 'react-bootstrap';
import appStyles from '../../App.module.css';
import { useProfileData } from '../../contexts/ProfileDataContext';

const PopularProfiles = () => {

    const {popularProfiles} = useProfileData();
  return (
    <Container className={appStyles.Content}>
        <h4 className='text-center'>Our Top Profiles</h4>
        {popularProfiles.results.map(profile => (
            <p key={profile.id}>{profile.user}</p>
        ))}

    </Container>
   
  )
}

export default PopularProfiles