import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import appStyles from "../../App.module.css";
import { axiosRes } from '../../api/axiosDefaults';

const UserPasswordForm = () => {
    const history = useHistory();
    const {id} = useParams();
    const currentUser = useCurrentUser();

    const [userData, setUserData] = useState({
        new_password1: "",
        new_password2: "",
    });
    const{new_password1, new_password2} = userData;
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            history.push("/");
        }
    }, [currentUser, history, id]);

 
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userData);
            setShowModal(true);
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        history.goBack();    
    };
    return (
        <Row>
            <Col className="py-2 mx-auto text-center font-weight-bold" md={8}>
            {showModal && (
                <Modal show={showModal} onHide={handleCloseModal} centered={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Password updated successfully!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <h3>Change password</h3>
              <Form.Label>New password</Form.Label>
              <Form.Control
                placeholder="enter new password"
                type="password"
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
                className={`${appStyles.Input} text-center`}
                aria-label="new password"
              />
            </Form.Group>

            {errors?.new_password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                placeholder="confirm new password"
                type="password"
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
                className={`${appStyles.Input} text-center`}
                aria-label="confirm new password"
              />
            </Form.Group>

            {errors?.new_password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              onMouseDown={(event) => event.preventDefault()}
              className={`mx-2 ${appStyles.Button}`}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={`mx-2 my-2 ${appStyles.Button}`}
              onMouseDown={(event) => event.preventDefault()}
            >
              Save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>   
    )
}

export default UserPasswordForm