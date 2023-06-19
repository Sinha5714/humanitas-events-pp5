import React from 'react';
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
        event_end_date,
        category,
        sub_category,
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
            {title && <Card.Title className='text-center'>{title}</Card.Title>}
            {category && sub_category && <Card.Text className='text-center'>{category} - {sub_category}</Card.Text>}
            {event_start_date && event_end_date && <Card.Text className='text-center'>{event_start_date} - {event_end_date}</Card.Text>}
            {content && <Card.Text>{content}</Card.Text>}
            <div>
                {is_owner?(
                    <OverlayTrigger placement='top' overlay={<Tooltip>You can't show interest to your own event</Tooltip>}>
                        <i className="far fa-star" />
                    </OverlayTrigger>
                ): interested_id?(
                    <span onClick={() => {}}>
                        <i className="fas fa-star" />
                    </span>
                ): currentUser? (
                    <span onClick={()=>{}}>
                        <i className='far fa-star' />
                    </span>
                ) : (
                    <OverlayTrigger placement='top' overlay={<Tooltip>Log in to show your interest!</Tooltip>}>
                        <i className="far fa-star" />
                    </OverlayTrigger>
                )}
                <span className='mr-2'>{interested_count}</span>

                {is_owner?(
                    <OverlayTrigger placement='top' overlay={<Tooltip>You can't send join request to your own event</Tooltip>}>
                        <i className="far fa-calendar-check" />
                    </OverlayTrigger>
                ): join_id?(
                    <span onClick={() => {}}>
                        <i className="fas fa-calendar-check" />
                    </span>
                ): currentUser? (
                    <span onClick={()=>{}}>
                        <i className='far fa-calendar-check' />
                    </span>
                ) : (
                    <OverlayTrigger placement='top' overlay={<Tooltip>Log in to send a join request!</Tooltip>}>
                        <i className="far fa-calendar-check" />
                    </OverlayTrigger>
                )}
                <span className='mr-2'>{join_request}</span>
                    
                <Link to={`/events/${id}`}>
                    <i className='far fa-comments'></i>
                </Link>
                {comments_count}

            </div>

        </Card.Body>
    </Card>
  )
}

export default Event