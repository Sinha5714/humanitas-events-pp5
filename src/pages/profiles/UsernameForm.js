import React, { useEffect, useState } from 'react'
import { Col, Row, Form, Container, Button, Alert } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';
import appStyles from "../../App.module.css";
import { axiosRes } from '../../api/axiosDefaults';

const UsernameForm = () => {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({});

    const history = useHistory();
    const {id} = useParams();
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    useEffect(() =>{
        if(currentUser?.profile_id?.toString() === id){
            setUsername(currentUser.username);
        }else{
            history.push("/");
        }
    }, [currentUser, history, id])

    const handleSubmit = async(event) =>{
        event.preventDefault();
        try {
            await axiosRes.put("/dj-rest-auth/user/", {
                username,
            });
            setCurrentUser((prevUser) => ({
                ...prevUser,
                username,
            }));
            history.goBack();
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
        }
    }

  return (
    <Row>
        <Col className="py-2 mx-auto text-center" md={6}>
            <Container className={appStyles.Content}>
                <Form onSubmit={handleSubmit} className="my-2">
                    <Form.Group>
                        <Form.Label>Change username</Form.Label>
                        <Form.Control
                        placeholder="username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        />
                    </Form.Group>
                    {errors?.username?.map((message, idx) => (
                        <Alert key={idx} variant="warning">
                            {message}
                        </Alert>
                    ))}
                    <Button onClick={() => history.goBack()}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </Form>
            </Container>
        </Col>
    </Row>

  )
}

export default UsernameForm;