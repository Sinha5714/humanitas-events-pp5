import React from 'react';
import styles from '../../styles/Profile.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Profile = (props) => {
    const {profile} = props;
    const {id, following_id, profile_pic, user} = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === user;
    return (
    <div className={`${styles.Profiles} mb-2`}>
        <div>
            <Link className='align-self-center' to={`/profiles/${id}`}>
                <Avatar src={profile_pic} height={40} />
            </Link>
        </div>
        <div className={`mx-2 ${styles.WordBreak}`}>{user}</div>

    </div>
  )
}

export default Profile