import React, { useEffect, useState } from 'react'
import { Col, Row, Form, Container, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';
import appStyles from "../../App.module.css";

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

  return (
    <Row>
        <Col className="py-2 mx-auto text-center" md={6}>
            <Container className={appStyles.Content}>
                <Form onSubmit={()=>{}} className="my-2">
                    <Form.Group>
                        <Form.Label>Change username</Form.Label>
                        <Form.Control
                        placeholder="username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        />
                    </Form.Group>
                    <Button onClick={() => history.goBack()}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </Form>
            </Container>
        </Col>
    </Row>

  )
}

export default UsernameForm;