// React imports
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// CSS imports
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import appStyles from "../../App.module.css";
// Components imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import PopularProfiles from "./PopularProfiles";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import ProfileContactDetails from "./ProfileContactDetails";
import { fetchMoreData } from "../../utils/utils";
import Event from "../events/Event";
import { ProfileEditDropdown } from "../../components/Dropdowns";
// Image imports
import NoResults from "../../assets/no-results.png";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileEvents, setProfileEvents] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileEvents }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/events/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileEvents(profileEvents);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err)
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfilePic}
            roundedCircle
            src={profile?.profile_pic}
          />
        </Col>
        <Col lg={8}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.events_count}</div>
              <div>Events</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
          <Col lg={-4}>
            <div className="text-align-center">
              {currentUser &&
                !is_owner &&
                (profile?.following_id ? (
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
          </Col>
        </Col>
      </Row>
      <Container className={appStyles.Content}>
        <h5 className="text-center p-2">About {profile?.owner}</h5>
        {profile?.name && (
          <>
            <Col className="p-1">Name:</Col>
            <Col className="p-2">
              <strong>{profile?.name}</strong>
            </Col>
          </>
        )}

        {profile?.about_me && (
          <>
            <Col className="p-1">Bio:</Col>
            <Col className="p-2">
              <strong>{profile?.about_me}</strong>
            </Col>
          </>
        )}
      </Container>

      <Col>
        <ProfileContactDetails mobile />
      </Col>
    </>
  );

  const mainProfileEvents = (
    <>
      <hr />
      <h5 className="text-center">{profile?.owner}'s Events</h5>
      <hr />
      {profileEvents.results.length ? (
        <InfiniteScroll
          children={profileEvents.results.map((event) => (
            <Event key={event.id} {...event} setEvents={setProfileEvents} />
          ))}
          dataLength={profileEvents.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileEvents.next}
          next={() => fetchMoreData(profileEvents, setProfileEvents)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfileEvents}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <ProfileContactDetails />
      </Col>
    </Row>
  );
}

export default ProfilePage;
