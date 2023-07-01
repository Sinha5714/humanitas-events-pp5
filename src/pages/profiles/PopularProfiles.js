// React imports
import React from "react";
// Bootstrap imports
import Container from "react-bootstrap/Container";
// CSS imports
import appStyles from "../../App.module.css";
// Components imports
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = () => {
  const { popularProfiles } = useProfileData();
  return (
    <Container className={`${appStyles.Content} mb-3`}>
      {popularProfiles.results.length ? (
        <>
          <h4 className="text-center">Follow our Top Organisers</h4>
          {popularProfiles.results.slice(0, 5).map((profile) => (
            <Container
              key={profile.id}
              className="d-inline justify-content-center align-items-center"
            >
              <Profile profile={profile} mobile />
            </Container>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
