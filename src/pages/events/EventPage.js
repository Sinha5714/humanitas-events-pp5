import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { fetchMoreData } from '../../utils/utils';
import Comment from '../comments/Comment';
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
                const [ {data : event}, {data: comments}] = await Promise.all([
                    axiosReq.get(`/events/${id}`),
                    axiosReq.get(`/comments/?post=${id}`)
                    ]
                )
                setEvent({results : [event]});
                setComments(comments);
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
                    ) :  (
                    <>
                        <div className="mb-3">
                        <i className="far fa-comments"></i>
                        <span className="ml-3">Log in to comment!!</span>
                        </div>
                    </>
                    )}
                    {comments.results.length ? (
                        <InfiniteScroll 
                        children={comments.results.map((comment) => (
                            <Comment key={comment.id}
                            {...comment}
                            setEvent = {setEvent}
                            setComments={setComments}
                            />
                        ))}
                        dataLength={comments.results.length}
                        loader={<Asset spinner />}
                        hasMore={!!comments.next}
                        next={() => fetchMoreData(comments, setComments)}
                        />
                    ) : currentUser ? (
                        <span>No comments yet, be the first to comment!</span>
                    ) : (
                        <span>No comments... yet</span>
                    )}
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