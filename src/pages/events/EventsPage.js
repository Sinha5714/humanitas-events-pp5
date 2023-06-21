import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Event from './Event';
import NoResults from "../../assets/no-results.png";
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';
import PopularProfiles from '../profiles/PopularProfiles';
import UpComingEvents from './UpComingEvents';


function EventsPage({message, filter=""}) {
    const [events, setEvents] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();

    const [query, setQuery] = useState("");

    useEffect(()=>{
        const fetchEvents = async () => {
            try {
                const {data} = await axiosReq.get(`/events/?${filter}search=${query}`)
                setEvents(data)
                setHasLoaded(true)
            } catch (err) {
                console.log(err)
            }
        }
        setHasLoaded(false)
        fetchEvents()
    }, [filter,query, pathname])
  return (
    <Row className='h-100'>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <PopularProfiles />
            <Container>
                <i className='fas fa-search' />
                <Form onSubmit={(event) => event.preventDefault()}>
                    <Form.Control
                    value={query}
                    onChange={(event) => setQuery(event.target.value)} 
                    type='text'
                    className='mr-sm-2'
                    placeholder='Search Events by title, username, date or category'
                    />
                    
                </Form>
            </Container>
            {hasLoaded? (
                <>
                    {events.results.length?(
                        <InfiniteScroll
                            children={events.results.map((event) => (
                                <Event key={event.id} {...event} setEvents={setEvents} /> 
                            ))}
                            dataLength={events.results.length}
                            loader={<Asset spinner />}
                            hasMore={!!events.next}
                            next={() => fetchMoreData(events, setEvents)} 
                        />
                    ): (
                        <Container className={appStyles.Content}>
                            <Asset src={NoResults} message={message} />
                        </Container>
                    )}
                </>
            ) : (
                <Container className={appStyles.Content} >
                    <Asset spinner />
                </Container>
            )}        
        </Col>
        <Col md={4} className='d-none d-lg-block p-0 p-lg-2'>
            <UpComingEvents />
        </Col>
    </Row>
  )
}

export default EventsPage