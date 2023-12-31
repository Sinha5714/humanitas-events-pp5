// React imports
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
// CSS imports
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Buttons.module.css";
// Components imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const UserPasswordForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;
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
      // console.log(err)
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
            <Modal.Body>Password updated successfully!</Modal.Body>
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
                className="text-center"
                aria-label="new password"
              />
            </Form.Group>

            {errors?.new_password1?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
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
                className="text-center"
                aria-label="confirm new password"
              />
            </Form.Group>

            {errors?.new_password2?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              onMouseDown={(e) => e.preventDefault()}
              className={btnStyles.CancelButton}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
            >
              Save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UserPasswordForm;
