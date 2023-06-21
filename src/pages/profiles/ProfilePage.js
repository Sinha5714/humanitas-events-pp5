import React, { useEffect, useState } from "react";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import PopularProfiles from "./PopularProfiles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const {id} = useParams();
    const setProfileData = useSetProfileData();
    const {pageProfile} = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.user;

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const [{data : pageProfile}] = await Promise.all([
                    axiosReq.get(`/profiles/${id}`)
                ])
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: {results: [pageProfile]}
                }))
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        }   
        fetchData()
    }, [id, setProfileData])

    const mainProfile = (
        <>
        <Row noGutters className="px-3 text-center">
            <Col lg={3} className="text-lg-left">
                <Image className={styles.ProfilePic} roundedCircle src={profile?.profile_pic}/>
            </Col>
            <Col lg={8}>
                <h3 className="m-2">{profile?.user}</h3>
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
                            onClick={() => {}}
                        >
                            Unfollow
                        </Button>
                        ) : (
                        <Button
                            onClick={() => {}}
                        >
                            Follow
                        </Button>
                        ))}
                    </div>
                </Col>
            </Col>
        </Row>
        </>
    );

    const mainProfileEvents = (
        <>
        <hr />
        <p className="text-center">Profile user's events</p>
        <hr />
        </>
    );

    return (
        <Row>
        <Col className="py-2 p-0 p-lg-2" lg={8}>
            <PopularProfiles />
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
            <p>Contact Details</p>
        </Col>
        </Row>
    );
}

    export default ProfilePage;