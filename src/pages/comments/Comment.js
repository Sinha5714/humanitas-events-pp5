// React imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Bootstrap imports
import Media from "react-bootstrap/Media";
// CSS imports
import styles from "../../styles/Comment.module.css";
// Components imports
import Feedback from "../../components/Feedback";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentEditForm from "./CommentEditForm";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { EditDeleteDropdown } from "../../components/Dropdowns";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_on,
    content,
    id,
    setEvent,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    setIsDeleted(true);
    setTimeout(async () => {
      try {
        await axiosRes.delete(`/comments/${id}/`);
        setEvent((prevEvent) => ({
          results: [
            {
              ...prevEvent.results[0],
              comments_count: prevEvent.results[0].comments_count - 1,
            },
          ],
        }));
        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.filter((comment) => comment.id !== id),
        }));
      } catch (err) {
        // console.log(err)
      }
    }, 2500);
  };

  return isDeleted ? (
    <Feedback variant="info" message="Comment has been deleted successfully!" />
  ) : (
    <div>
      {showAlert && (
        <Feedback
          variant="info"
          message="Comment has been updated successfully!"
        />
      )}
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.User}>{owner}</span>
          <span className={styles.Date}>{updated_on}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
              setShowAlert={setShowAlert}
            />
          ) : (
            <p className={styles.Comment}>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <EditDeleteDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  );
};

export default Comment;
