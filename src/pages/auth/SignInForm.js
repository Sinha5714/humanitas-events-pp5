import React, { useState } from 'react';
import {Col, Row, Container, Button, Form, Alert } from "react-bootstrap";
import { Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';

const SignInForm = () => {
    const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;
    
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
          ...signInData,
          [event.target.name]: event.target.value,
        });
      };
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const {data} = await axios.post("/dj-rest-auth/login/", signInData);
        setCurrentUser(data.user);
        history.push("/");
    } catch (err) {
        setErrors(err.response?.data);
    }
    };
  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className="p-4">
          <h1>Sign Up</h1>
          <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                    />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleChange}
                    />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning" className="mt-3">
                        {message}
                    </Alert>
                ))}
            </Form>
        </Container>
        <Container className="mt-3">
          <Link to="/signup">
            Don't Have an account! <span>Sign Up Here</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className="my-auto d-none d-md-block p-2">
      </Col>
    </Row>
  );
};

export default SignInForm;