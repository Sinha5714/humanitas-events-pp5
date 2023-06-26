import React, { useState } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert  from "react-bootstrap/Alert";
import styles from "../../styles/SignInSignUpForm.module.css";
import appStyles from "../../App.module.css";
import { Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import { useRedirect } from '../../hooks/useRedirect';

const SignUpForm = () => {

    useRedirect('loggedIn')
    
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const { username, password1, password2 } = signUpData;
    
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value,
        });
      };
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post("/dj-rest-auth/registration/", signUpData);
        history.push("/signin");
    } catch (err) {
        // console.log(err)
        setErrors(err.response?.data);
    }
    };
  return (
    <Row className="text-center">
      <Col className="my-auto offset-md-2" md={8}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className="mb-4">Sign Up</h1>
          <Form onSubmit={handleSubmit}>
                {errors.username?.map((message, idx) => (
                    <Alert variant="warning" className={appStyles.Alert} key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="username">
                    <Form.Text muted>
                        Your username must be 1-10 characters long.
                    </Form.Text>
                    <Form.Label className='d-none'>Username</Form.Label>
                    <Form.Control
                    className={`${appStyles.Input} text-center`}
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                    />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                    <Alert variant="warning" className={appStyles.Alert} key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="password1">
                    <Form.Label className='d-none'>Password</Form.Label>
                    <Form.Control
                    className={`${appStyles.Input} text-center`}
                    type="password"
                    name="password1"
                    value={password1}
                    placeholder="Password"
                    onChange={handleChange}
                    />
                </Form.Group>
                {errors.password2?.map((message, idx) => (
                    <Alert variant="warning" className={appStyles.Alert} key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group controlId="password2">
                    <Form.Label className='d-none'>Confirm Password</Form.Label>
                    <Form.Control
                    className={`${appStyles.Input} text-center`}
                    type="password"
                    name="password2"
                    value={password2} 
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    />
                </Form.Group>
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning" className={appStyles.Alert}>
                        {message}
                    </Alert>
                ))}
                <Button 
                className={`my-3 ${styles.SignInUpBtn}`}
                type="submit"
                onMouseDown={(e) => e.preventDefault()}>
                    Sign Up
                </Button>
                <Link className={styles.Link} to="/signin">
                    Already have an account? <span>Sign in</span>
                </Link>
            </Form>
        </Container>
      </Col>
      
    </Row>
  );
};

export default SignUpForm;