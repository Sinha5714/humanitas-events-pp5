import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Asset from '../../components/Asset';
import appStyles from "../../App.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const UpComingEvents = ({mobile}) => {
    const[upcomingEventsData, setUpcomingEventsData] = useState({
        upcomingEvents: {results: []},
    });

    const{upcomingEvents} = upcomingEventsData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get('/events/');
                setUpcomingEventsData((prevState) => ({
                    ...prevState,
                    upcomingEvents: data,
                }))
            } catch (err) {
                console.log(err)
            }
        };
        handleMount();
    }, [currentUser])
  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {upcomingEvents.results.length ? (
        <>
          <h4 className="text-center mb-4">Top Upcoming Events</h4>
          {mobile ? (
            <div className="d-flex">
              {upcomingEvents.results
                .filter((a) => new Date(a.event_start_date) - new Date() > 0)
                .slice(0, 5)
                .map((event) => (
                  <Card key={event.id} className= 'mr-2 p-2'>
                    <Link to={`/events/${event.id}`}>
                      {event.title}
                    </Link>
                  </Card>
                ))}
            </div>
          ) : (
            upcomingEvents.results
              .filter((a) => new Date(a.event_start_date) - new Date() > 0)
              .map((event) => (
                <div key={event.id}>
                  <Link to={`/events/${event.id}`}>
                    <strong>{event.title}</strong>
                  </Link>
                  <p>{event.event_start_date}</p>
                  <hr />
                </div>
              ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  )
}

export default UpComingEvents