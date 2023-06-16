import React, { useState } from 'react';
import {Col, Row, Container, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const { username, password1, password2 } = signUpData;

    const handleChange = (event) => {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value,
        });
      };

  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className="p-4">
          <h1>Sign Up</h1>
          <Form>
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

                <Form.Group controlId="password1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password1"
                    value={password1}
                    placeholder="Password"
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="password2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password2"
                    value={password2} 
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
        <Container className="mt-3">
          <Link to="/signin">
            Already have an account? <span>Sign in</span>
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

export default SignUpForm;