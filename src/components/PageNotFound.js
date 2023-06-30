// React imports
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// CSS imports
import appStyles from "../App.module.css";
import btnStyles from "../styles/Buttons.module.css";
// Image import
import NotFound from "../assets/404.jpg";

const PageNotFound = () => {
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={12}>
        <Container className={appStyles.Content}>
          <Image
            className={appStyles.Image}
            src={NotFound}
            alt="Page not found image"
            rounded
          />
          <p className="bg-dark text-white">
            <a
              href="https://www.freepik.com/free-vector/404-error-with-landscape-concept-illustration_20602785.htm#query=404%20page&position=4&from_view=search&track=ais"
              rel="noreferrer"
              target="_blank"
            >
              Image by storyset
            </a>{" "}
            on Freepik
          </p>

          <h3 className="my-3">This page has not been found!</h3>

          <Link to="/">
            <Button className={`${btnStyles.Button} my-3`}>
              Go back to Home Page
            </Button>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default PageNotFound;
