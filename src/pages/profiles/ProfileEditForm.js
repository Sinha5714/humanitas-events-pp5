import React, { useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
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

    useEffect(() => {
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const {data} = await axiosReq.get(`/profiles/${id}/`);
                    const {name, about_me, profile_pic, instagram_link, facebook_link, phone_number, email} = data;
                    setProfileData({name, about_me, profile_pic, instagram_link, facebook_link, phone_number, email});
                } catch (err) {
                    console.log(err);
                    history.push("/");
                }
            } else {
                history.push("/");
            }
        };
        handleMount();
    }, [currentUser, history, id]);

  return (
    <div>ProfileEditForm</div>
  )
}

export default ProfileEditForm