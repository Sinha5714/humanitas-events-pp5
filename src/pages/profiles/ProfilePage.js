import React, { useEffect, useState } from "react";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Col, Container, Image, Row } from "react-bootstrap";
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
            <Col lg={6}>
            <h3 className="m-2">Profile username</h3>
            <p>Profile stats</p>
            </Col>
            <Col lg={3} className="text-lg-right">
            <p>Follow button</p>
            </Col>
            <Col className="p-3">Profile content</Col>
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
            
        </Col>
        </Row>
    );
}

    export default ProfilePage;