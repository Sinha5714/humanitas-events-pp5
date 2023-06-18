import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import appStyles from "../../App.module.css";


function EventPage() {
  return (
    <>
        <Row className="h-100">
            <Col className='py-2 p-0 p-lg-2' lg={8}>
                <p>Popular profiles for mobile</p>
                <p>Event component</p>
                <Container className={appStyles.Content}>Comments</Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                Popular profiles for desktop
            </Col>
        </Row>
    </>
  )
}

export default EventPage