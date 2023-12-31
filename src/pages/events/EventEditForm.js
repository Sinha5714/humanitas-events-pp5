// React imports
import React, { useEffect, useRef, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
// CSS imports
import appStyles from "../../App.module.css";
import styles from "../../styles/EventsCreateEditForm.module.css";
import btnStyles from "../../styles/Buttons.module.css";
// Components imports
import { axiosReq } from "../../api/axiosDefaults";

function EventsEditForm() {
  const [eventData, setEventData] = useState({
    title: "",
    content: "",
    event_start_date: "",
    event_end_date: "",
    category: "",
    sub_category: "",
    image: "",
  });
  const {
    title,
    content,
    event_start_date,
    event_end_date,
    category,
    sub_category,
    image,
  } = eventData;
  const [errors, setErrors] = useState({});
  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}`);
        const {
          title,
          content,
          event_start_date,
          event_end_date,
          category,
          sub_category,
          image,
          is_owner,
        } = data;
        is_owner
          ? setEventData({
              title,
              content,
              event_start_date,
              event_end_date,
              category,
              sub_category,
              image,
            })
          : history.push("/");
      } catch (err) {
        // console.log(err)
      }
    };
    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setEventData({
        ...eventData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("event_start_date", event_start_date);
    formData.append("event_end_date", event_end_date);
    formData.append("category", category);
    formData.append("sub_category", sub_category);
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    try {
      await axiosReq.put(`/events/${id}`, formData);
      setShowModal(true);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    history.push(`/events/${id}`);
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Event Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" className={appStyles.Alert} key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="content"
          value={content}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" className={appStyles.Alert} key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Starting Date</Form.Label>
          <Form.Control
            type="date"
            name="event_start_date"
            value={event_start_date}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {errors?.event_start_date?.map((message, idx) => (
          <Alert variant="warning" className={appStyles.Alert} key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group as={Col}>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="event_end_date"
            value={event_end_date}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {errors?.event_end_date?.map((message, idx) => (
          <Alert variant="warning" className={appStyles.Alert} key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Row>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option>Discrimination</option>
          <option>LGBTQ</option>
          <option>Equal-Rights</option>
          <option>Marraige-Rights</option>
          <option>Work-Rights</option>
          <option>Education-Rights</option>
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" className={appStyles.Alert} key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Sub-Category</Form.Label>
        <Form.Control
          as="select"
          name="sub_category"
          value={sub_category}
          onChange={handleChange}
        >
          <option>Seminars</option>
          <option>Meet-ups</option>
          <option>Retreats</option>
        </Form.Control>
      </Form.Group>
      {errors?.sub_category?.map((message, idx) => (
        <Alert variant="warning" className={appStyles.Alert} key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={btnStyles.CancelButton}
        onMouseDown={(e) => e.preventDefault()}
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
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={6} lg={6}>
          {showModal && (
            <Modal show={showModal} onHide={handleCloseModal} centered={true}>
              <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
              </Modal.Header>
              <Modal.Body>Event data has been updated successfully!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )}
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label htmlFor="image-upload">Change the image</Form.Label>
              </div>
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={6} lg={6} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventsEditForm;
