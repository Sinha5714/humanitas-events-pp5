// React imports
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
// Bootstrap imports
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// CSS imports
import styles from "../../styles/Event.module.css";
import btnStyles from "../../styles/Buttons.module.css";
// Components imports
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { EditDeleteDropdown } from "../../components/Dropdowns";
import Feedback from "../../components/Feedback";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  EndDateFormatter,
  StartDateFormatter,
} from "../../utils/DateFormatter";

const Event = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    interested_count,
    interested_id,
    join_request,
    join_id,
    title,
    content,
    event_start_date,
    event_end_date,
    category,
    sub_category,
    image,
    updated_on,
    eventPage,
    setEvents,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      setShowAlert(true);
      setTimeout(function () {
        history.push("/");
      }, 2000);
    } catch (err) {
      // console.log(err)
    }
  };

  const handleInterested = async () => {
    try {
      const { data } = await axiosRes.post("/interested/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                interested_count: event.interested_count + 1,
                interested_id: data.id,
              }
            : event;
        }),
      }));
    } catch (err) {
      // console.log(err)
    }
  };
  const handleNotInterested = async () => {
    try {
      await axiosRes.delete(`/interested/${interested_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                interested_count: event.interested_count - 1,
                interested_id: null,
              }
            : event;
        }),
      }));
    } catch (err) {}
  };

  const handleJoin = async () => {
    try {
      const { data } = await axiosRes.post("/join/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                join_request: event.join_request + 1,
                join_id: data.id,
              }
            : event;
        }),
      }));
    } catch (err) {}
  };
  const handleCancelJoin = async () => {
    try {
      await axiosRes.delete(`/join/${join_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, join_request: event.join_request - 1, join_id: null }
            : event;
        }),
      }));
    } catch (err) {
      // console.log(err)
    }
  };

  return (
    <Card className={styles.Event}>
      {showAlert && (
        <Feedback
          variant="info"
          message="Your event post has been deleted successfully"
        />
      )}
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_on}</span>
            {is_owner && eventPage && (
              <EditDeleteDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/events/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {category && sub_category && (
          <Card.Text className="text-center">
            {category} - {sub_category}
          </Card.Text>
        )}
        {event_start_date && event_end_date && (
          <Card.Text className="text-center">
            <StartDateFormatter event_start_date={event_start_date} /> -{" "}
            <EndDateFormatter event_end_date={event_end_date} />
          </Card.Text>
        )}
        {content && <Card.Text>{content}</Card.Text>}
        <div>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>You can't show interest to your own event</Tooltip>
              }
            >
              <i className="far fa-star" />
            </OverlayTrigger>
          ) : interested_id ? (
            <span onClick={handleNotInterested}>
              <i className={`fas fa-star ${styles.Star}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleInterested}>
              <i className={`far fa-star ${styles.StarOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to show your interest!</Tooltip>}
            >
              <i className="far fa-star" />
            </OverlayTrigger>
          )}
          <span className="mr-2">{interested_count}</span>
          <Link to={`/events/${id}`}>
            <i className="far fa-comments"></i>
          </Link>
          {comments_count}
        </div>
        <div>
          <span className="mr-2">
            {join_request} people are attending this event.{" "}
          </span>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>You can't add attending to your own event</Tooltip>
              }
            >
              <Button
                className={btnStyles.Button}
                onMouseDown={(e) => e.preventDefault()}
              >
                Attend
              </Button>
            </OverlayTrigger>
          ) : join_id ? (
            <Button
              onClick={handleCancelJoin}
              onMouseDown={(e) => e.preventDefault()}
              className={btnStyles.CancelButton}
            >
              You are attending!
            </Button>
          ) : currentUser ? (
            <Button
              onClick={handleJoin}
              onMouseDown={(e) => e.preventDefault()}
              className={btnStyles.Button}
            >
              Attend
            </Button>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in if you want to attend!</Tooltip>}
            >
              <Button
                className={btnStyles.Button}
                onMouseDown={(e) => e.preventDefault()}
              >
                Attend
              </Button>
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;
