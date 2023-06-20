import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { EditDeleteDropdown } from "../../components/Dropdowns";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./CommentEditForm";

const Comment = (props) => {
  const { profile_id, profile_image, user, updated_on, content, id, setEvent, setComments } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === user;

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/comments/${id}/`)
        setEvent(prevEvent => ({
            results: [{
                ...prevEvent.results[0],
                comments_count: prevEvent.results[0].comments_count - 1
            }]
        }));
        setComments((prevComments) => ({
            ...prevComments,
            results: prevComments.results.filter((comment) => comment.id !== id),
        }));
    } catch (err) {
        
    }
  }

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.User}>{user}</span>
          <span className={styles.Date}>{updated_on}</span>
          {showEditForm ? (
            <CommentEditForm
            id={id}
            profile_id={profile_id}
            content={content}
            profileImage={profile_image}
            setComments={setComments}
            setShowEditForm={setShowEditForm} />
          ) : (
            <p className={styles.Comment}>{content}</p>
          )}
          
        </Media.Body>
        {is_owner && (
            <EditDeleteDropdown handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete} />
        )}
      </Media>
    </div>
  );
};

export default Comment;