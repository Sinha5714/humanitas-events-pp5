import React, { useRef, useState } from 'react'
import { Col, Container, Form, Button, Row, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Upload from "../../assets/upload-image.png";
import Asset from '../../components/Asset';
import styles from "../../styles/EventsCreateEditForm.module.css"


function EventsCreateForm() {

    const [eventData, setEventData] = useState({
        title: '',
        content: '',
        event_start_date: '',
        event_end_date: '',
        category: '',
        sub_category: '',
        country: '',
        image: '',
    });
    const { title, content, event_start_date, event_end_date, category, sub_category, image } = eventData;
    const [errors, setErrors] = useState({});
    const imageInput = useRef(null);
    const history = useHistory();

    const handleChange = (event) =>{
        setEventData({
            ...eventData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) =>{
        if(event.target.files.length){
            URL.revokeObjectURL(image);
            setEventData({
                ...eventData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        };
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
                >
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                as='textarea'
                rows={4}
                name="content"
                value={content}
                onChange={handleChange}
                >
                </Form.Control>               
            </Form.Group>
            <Form.Group>
                <Form.Label>From</Form.Label>
                <Form.Control
                type="date"
                name="event_start_date"
                value={event_start_date}
                onChange={handleChange}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Till</Form.Label>
                <Form.Control
                type="date"
                name="event_end_date"
                value={event_end_date}
                onChange={handleChange}
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                as='select'
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
            <Form.Group>
                <Form.Label>Sub-Category</Form.Label>
                <Form.Control
                as='select'
                name="sub_category"
                value={sub_category}
                onChange={handleChange}
                >
                <option>Seminars</option>
                <option>Meet-ups</option>
                <option>Retreats</option>
                </Form.Control>
            </Form.Group>

            <Button
            >
                Cancel
            </Button>
            <Button  type="submit">
                Add
            </Button>
        </div>
    )
    
    return (
        <>
        <Container>
            <h2 className="text-center">Add a New Event</h2>

        </Container>
        <Form>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container className={styles.Container}>
                        <Form.Group className="text-center">
                            {image?(
                                <>
                                    <figure>
                                        <Image src={image} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label
                                        htmlFor='image-upload'>
                                            Change the image
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label
                                className="d-flex justify-content-center"
                                htmlFor='image-upload'>
                                    <Asset src={Upload} message="Click to upload event image here" />
                                </Form.Label>
                            )}
                            <Form.File
                            id="image-upload"
                            accept="image/*"
                            onChange={handleChangeImage}
                            ref={imageInput} />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container>{textFields}</Container>
                </Col>
            </Row>
        </Form>
        
        </>

        
    )
}

export default EventsCreateForm