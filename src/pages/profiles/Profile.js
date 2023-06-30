// React imports
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// Bootstrap imports
import Button from "react-bootstrap/Button";
// CSS imports
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Buttons.module.css";
// Components imports
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

const Profile = (props) => {
  const { profile } = props;
  const { id, following_id, profile_pic, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div className={`${styles.Profiles} mb-2`}>
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={profile_pic} height={40} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>{owner}</div>
      <div>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={btnStyles.UnfollowBtn}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleUnfollow(profile)}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              className={btnStyles.Button}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleFollow(profile)}
            >
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
