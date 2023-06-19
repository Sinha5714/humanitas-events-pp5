
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";
import Avatar from "./Avatar";
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';


const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    const handleLogOut = async () =>{
        try {
            await axios.post("/dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err)
        }
    };

    const addEventIcon = (
        <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/events/create">
            <i className="fas fa-plus"></i>Add Event
        </NavLink>
    )

    const loggedInIcons = (
        <>
            <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
            onClick={() => {}}
            >
                <i className="fas fa-stream"></i>Feed
            </NavLink>

            <NavLink className={styles.NavLink}
            to="/" 
            onClick={handleLogOut}>
                <i className="fas fa-sign-out-alt"></i>Logout
            </NavLink>

            <NavLink className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}>
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
        </>
    )
       
    const loggedOutIcons = (
        <>
            <NavLink className={styles.NavLink}
            activeClassName={styles.Active} to="/signin">
                <i className="fas fa-sign-in-alt"></i>Sign In
            </NavLink>
            <NavLink className={styles.NavLink}
            activeClassName={styles.Active} to="/signup">
                <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
        </>
    )
       
    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/">
                <Navbar.Brand>
                <img src={logo} alt="logo" height="45" />
                </Navbar.Brand>
                <Navbar.Brand>
                Humanitas Events
                </Navbar.Brand>
            </NavLink>
            {currentUser && addEventIcon}
            <Navbar.Toggle
            ref={ref}
            onClick={()=> setExpanded(!expanded)}
            aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
                <NavLink className={styles.NavLink}
                activeClassName={styles.Active} exact to="/">
                <i className="fas fa-home"></i>Home
                </NavLink>
                {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;