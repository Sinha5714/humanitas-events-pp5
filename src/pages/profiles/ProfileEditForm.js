import React, { useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext'

const ProfileEditForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const {id} = useParams();
    const history = useHistory();
    const imageFile = useRef();

    const [profileData, setProfileData] = useState({
        name: "",
        about_me: "",
        profile_pic: "",
        instagram_link: "",
        facebook_link: "",
        phone_number: "",
        email: "",

    });

    const {
        name,
        about_me,
        profile_pic,
        instagram_link,
        facebook_link,
        phone_number,
        email
    } = profileData;

  return (
    <div>ProfileEditForm</div>
  )
}

export default ProfileEditForm