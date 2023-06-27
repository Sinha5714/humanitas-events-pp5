import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";
import { axiosRes } from "../../api/axiosDefaults";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setShowModal(true);
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
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
      <Col className="py-2 mx-auto text-center" md={6}>
        {showModal && (
          <Modal show={showModal} onHide={handleCloseModal} centered={true}>
            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>Username updated successfully!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
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
  );
};

export default UsernameForm;
