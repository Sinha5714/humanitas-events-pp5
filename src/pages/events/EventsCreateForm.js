// React imports
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
// CSS imports
import appStyles from "../../App.module.css";
import styles from "../../styles/EventsCreateEditForm.module.css";
import btnStyles from "../../styles/Buttons.module.css";
// Components imports
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import Asset from "../../components/Asset";
// Image imports
import Upload from "../../assets/upload.png";


function EventsCreateForm() {
  useRedirect("loggedOut");

  const [eventData, setEventData] = useState({
    title: "",
    content: "",
    event_start_date: "",
    event_end_date: "",
    category: "",
    sub_category: "",
    country: "",
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
    formData.append("image", imageInput.current.files[0]);
    try {
      const { data } = await axiosReq.post("/events/", formData);
      history.push(`/events/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
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
        onClick={() => history.goBack()}
        onMouseDown={(e) => e.preventDefault()}
        className={btnStyles.CancelButton}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        className={btnStyles.Button}
        onMouseDown={(e) => e.preventDefault()}
      >
        Add
      </Button>
      {errors.non_field_errors?.map((message, idx) => (
        <Alert variant="warning" className="mt-3" key={idx}>
          {message}{" "}
        </Alert>
      ))}
    </div>
  );

  return (
    <>
      <Container className={`${appStyles.Content} mt-3`}>
        <h2 className="text-center">Add a New Event</h2>
      </Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="py-2 p-0 p-md-2" md={6} lg={6}>
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                {image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image} rounded />
                    </figure>
                    <div>
                      <Form.Label htmlFor="image-upload">
                        Change the image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset
                      src={Upload}
                      message="Click to upload event image here"
                    />
                  </Form.Label>
                )}
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
    </>
  );
}

export default EventsCreateForm;
