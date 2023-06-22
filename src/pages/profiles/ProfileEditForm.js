import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext'
import appStyles from "../../App.module.css";

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

    const handleChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name] : event.target.value,
        });
    };


    const textFields = (
        <>
            <Form.Group>
                <Form.Label>Name or Organisation Name:</Form.Label>
                <Form.Control
                type = "text"
                value={name}
                onChange={handleChange}
                name="name"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>About:</Form.Label>
                <Form.Control
                as =  "textarea"
                value={about_me}
                onChange={handleChange}
                name="about_me"
                rows={6}
                />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Facebook:</Form.Label>
                    <Form.Control
                    type = "text"
                    value={facebook_link}
                    onChange={handleChange}
                    name="facebook_link"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Instagram:</Form.Label>
                    <Form.Control
                    type = "text"
                    value={instagram_link}
                    onChange={handleChange}
                    name="instagram_link"
                    />
                </Form.Group>
            </Form.Row>
            
            <Form.Group>
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                type = "text"
                value={phone_number}
                onChange={handleChange}
                name="phone_number"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                type = "email"
                value={email}
                onChange={handleChange}
                name="email"
                />
            </Form.Group>
        </>
    )
    return (
        <Container className={appStyles.Content}>{textFields}</Container>
    )
}

export default ProfileEditForm