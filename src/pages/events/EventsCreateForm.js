import React, { useState } from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap';


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


    const handleChange = (event) =>{
        setEventData({
            ...eventData,
            [event.target.name]: event.target.value,
        });
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
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
            <Container>{textFields}</Container>
        </Col>
        </>

        
    )
}

export default EventsCreateForm