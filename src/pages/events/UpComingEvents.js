// React imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// Bootstrap imports
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// CSS imports
import appStyles from "../../App.module.css";
// Components imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { StartDateFormatter } from "../../utils/DateFormatter";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";

const UpComingEvents = ({ mobile }) => {
  const [upcomingEventsData, setUpcomingEventsData] = useState({
    upcomingEvents: { results: [] },
  });

  const { upcomingEvents } = upcomingEventsData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/events/");
        setUpcomingEventsData((prevState) => ({
          ...prevState,
          upcomingEvents: data,
        }));
      } catch (err) {
        // console.log(err)
      }
    };
    handleMount();
  }, [currentUser]);
  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {upcomingEvents.results.length ? (
        <>
          <h4 className="text-center mb-4">Upcoming Events</h4>
          {mobile ? (
            <div className="d-flex">
              {upcomingEvents.results
                .filter((a) => new Date(a.event_start_date) - new Date() > 0)
                .slice(0, 3)
                .map((event) => (
                  <Card key={event.id} className="mr-2 p-2">
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                  </Card>
                ))}
            </div>
          ) : (
            upcomingEvents.results
              .filter((a) => new Date(a.event_start_date) - new Date() > 0)
              .slice(0, 6)
              .map((event) => (
                <div key={event.id}>
                  <Link to={`/events/${event.id}`}>
                    <strong>{event.title}</strong>
                  </Link>
                  <p>
                    <StartDateFormatter
                      event_start_date={event.event_start_date}
                    />
                  </p>
                  <hr />
                </div>
              ))
          )}
        </>
      ) : (
        <Asset message="No upcoming events" />
      )}
    </Container>
  );
};

export default UpComingEvents;
