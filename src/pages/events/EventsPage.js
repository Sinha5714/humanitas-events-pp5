import React from 'react'
import { Col, Row } from 'react-bootstrap'

function EventsPage() {
  return (
    <Row className='h-100'>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <p>Popular profiles mobile</p>
            <p>List of events</p>
        </Col>
        <Col md={4} className='d-none d-lg-block p-0 p-lg-2'>
            <p>Upcoming events</p>
        </Col>
    </Row>
  )
}

export default EventsPage