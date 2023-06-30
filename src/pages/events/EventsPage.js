// React imports
import React, { useEffect, useState } from "react";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// CSS imports
import appStyles from "../../App.module.css";
import styles from "../../styles/EventsPage.module.css";
import btnStyles from "../../styles/Buttons.module.css";
// Components imports
import { axiosReq } from "../../api/axiosDefaults";
import Event from "./Event";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import UpComingEvents from "./UpComingEvents";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Image imports
import NoResults from "../../assets/no-results.png";

function EventsPage({ message, filter = "" }) {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(
          `/events/?${filter}search=${query}${
            category !== null ? `&category=${category}` : ""
          }${subCategory !== null ? `&sub_category=${subCategory}` : ""}`
        );
        setEvents(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err)
      }
    };
    setHasLoaded(false);
    fetchEvents();
  }, [filter, query, pathname, category, subCategory, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles />

        <UpComingEvents mobile />

        <Container>
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search Events by title, username and date"
            />
          </Form>
        </Container>
        <Container className="bg-white">
          <Col>
            <p className="font-weight-bold text-center">Categories</p>
          </Col>
          <Col className="text-center">
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCategory(null)}
            >
              All
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCategory("Discrimination")}
            >
              Discrimination
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCategory("LGBTQ")}
            >
              LGBTQ
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCategory("Equal-Rights")}
            >
              Equal Rights
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCategory("Marraige-Rights")}
            >
              Marraige Rights
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCategory("Work-Rights")}
            >
              Work Rights
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCategory("Education-Rights")}
            >
              Education Rights
            </Button>
          </Col>
        </Container>
        <Container className="bg-white mt-4 mb-4">
          <Col>
            <p className="font-weight-bold text-center">Sub-Categories</p>
          </Col>
          <Col className="text-center">
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setSubCategory(null)}
            >
              All
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setSubCategory("Seminars")}
            >
              Seminars
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setSubCategory("Meet-ups")}
            >
              Meet-ups
            </Button>
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setSubCategory("Retreats")}
            >
              Retreats
            </Button>
          </Col>
        </Container>

        {hasLoaded ? (
          <>
            {events.results.length ? (
              <InfiniteScroll
                children={events.results.map((event) => (
                  <Event
                    key={event.id}
                    {...event}
                    setEvents={setEvents}
                    content={
                      event.content.length > 200
                        ? event.content.slice(0, 200) + "......"
                        : event.content
                    }
                  />
                ))}
                dataLength={events.results.length}
                loader={<Asset spinner />}
                hasMore={!!events.next}
                next={() => fetchMoreData(events, setEvents)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <UpComingEvents />
      </Col>
    </Row>
  );
}

export default EventsPage;
