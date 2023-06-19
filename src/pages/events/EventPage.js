import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from "../../App.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import CommentCreateForm from '../comments/CommentCreateForm';
import Event from './Event';


function EventPage() {
    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({results : []});

    const {id} = useParams();
    const [event, setEvent] = useState({results: []});

    useEffect(()=>{
        const handleMount = async () => {
            try {
                const [ {data : event}] = await Promise.all(
                    [axiosReq.get(`/events/${id}`)]
                )
                setEvent({results : [event]});
            } catch (err) {
                console.log(err)
            }
        };
        handleMount(); 
    }, [id]);
  return (
    <>
        <Row className="h-100">
            <Col className='py-2 p-0 p-lg-2' lg={8}>
                <p>Popular profiles for mobile</p>
                <Event {...event.results[0]} setEvent={setEvent} eventPage />
                <Container className={appStyles.Content}>
                    {currentUser? (
                        <CommentCreateForm
                        profile_id={currentUser.profile_id}
                        profileImage={profile_image}
                        event={id}
                        setEvent={setEvent}
                        setComments={setComments} 
                    />
                    ) : comments.results.length? (
                        "Comments"
                    ) : null}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                Popular profiles for desktop
            </Col>
        </Row>
    </>
  )
}

export default EventPage