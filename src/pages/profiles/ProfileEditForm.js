import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
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

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const {data} = await axiosReq.get(`/profiles/${id}/`);
                    const {name, about_me, profile_pic, instagram_link, facebook_link, phone_number, email} = data;
                    setProfileData(
                        {name,
                        about_me,
                        profile_pic,
                        instagram_link,
                        facebook_link,
                        phone_number,
                        email
                        });
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

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('about_me', about_me);
        formData.append('instagram_link', instagram_link);
        formData.append('facebook_link', facebook_link);
        formData.append('phone_number', phone_number);
        formData.append('email', email);

        if(imageFile?.current?.files[0]) {
            formData.append('profile_pic', imageFile?.current?.files[0]);
        }

        try {
            const {data} = await axiosReq.put(`/profiles/${id}/`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_pic: data.profile_pic,
            }));
            history.goBack()
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
        }
    }

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
            {errors?.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
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
            {errors?.about_me?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
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
                {errors?.facebook_link?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
                ))}
                <Form.Group as={Col}>
                    <Form.Label>Instagram:</Form.Label>
                    <Form.Control
                    type = "text"
                    value={instagram_link}
                    onChange={handleChange}
                    name="instagram_link"
                    />
                </Form.Group>
                {errors?.instagram_link?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
                ))}
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
            {errors?.phone_number?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                type = "email"
                value={email}
                onChange={handleChange}
                name="email"
                />
            </Form.Group>
            {errors?.email?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            <Button className={`${appStyles.Button}`} onClick={() => history.goBack()}>
                Cancel
            </Button>
            <Button className={`${appStyles.Button}`} type="submit">
                Save
            </Button>
        </>
    )
    return (
        <>
            <Container className={`${appStyles.Content} mt-3`}>
                <h2 className="text-center">Edit Profile</h2>
            </Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={4}>
                        <Container className={appStyles.Content}>
                            <Form.Group>
                                {profile_pic && (
                                    <figure>
                                        <Image src={profile_pic} fluid />
                                    </figure>
                                )}
                                {errors?.profile_pic?.map((message, idx) => (
                                    <Alert variant="warning" key={idx}>
                                    {message}
                                    </Alert>
                                ))}
                                <div>
                                    <Form.Label
                                    htmlFor='image-upload'>
                                        Change profile image
                                    </Form.Label>
                                </div>
                                <Form.File
                                id="image-upload"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if(e.target.files.length) {
                                        setProfileData({
                                            ...profileData,
                                            profile_pic: URL.createObjectURL(e.target.files[0]),
                                        })
                                    }
                                }}
                                />
                            </Form.Group>
                            <div className='d-md-none'>{textFields}</div>
                        </Container>
                    </Col>
                    <Col md={5} lg={8} className="d-none d-md-block p-0 p-md-2 text-center">
                        <Container className={appStyles.Content}>{textFields}</Container>
                    </Col>
                </Row>
            </Form>
            
        </>
        
    )
}

export default ProfileEditForm