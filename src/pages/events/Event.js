import React from 'react';
import { Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/Event.module.css';

const Event = (props) => {
    const {
        id,
        user,
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
        image,
        updated_on,
        eventPage,
        setEvents,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === user
  return (
    <Card className={styles.Event}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55}/>
                    {user}
                </Link>
                <div className='d-flex align-items-center'>
                    <span>{updated_on}</span>
                    {is_owner && eventPage && "..."}
                </div>
            </Media>
        </Card.Body>
        <Link to={`/events/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {title && event_start_date && <Card.Title className='text-center'>{title} on {event_start_date}</Card.Title>}
            {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
    </Card>
  )
}

export default Event