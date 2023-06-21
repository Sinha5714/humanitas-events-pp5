import styles from "./App.module.css";
import NavBar from './components/NavBar';
import {Route, Switch} from 'react-router-dom';
import { Container } from "react-bootstrap";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import EventsCreateForm from "./pages/events/EventsCreateForm";
import EventPage from "./pages/events/EventPage";
import EventsPage from "./pages/events/EventsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import EventsEditForm from "./pages/events/EventEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";



function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || "";
    return (
        <div className={styles.App}>
            <NavBar/>
            <Container className={styles.Main}>
                <Switch>
                    <Route exact
                    path="/"
                    render={() => (
                        <EventsPage message="No results found. Adjust the search keyword!" />
                    )}
                    />
                    <Route exact
                    path="/feed"
                    render={() => (
                        <EventsPage message="No results found. Adjust the search keyword or follow a user!" 
                        filter={`user__followed__user__profile=${profile_id}&`}/>
                    )}
                    />
                    <Route exact
                    path="/interests"
                    render={() => (
                        <EventsPage message="No results found. Adjust the search keyword or show your interest in an event!" 
                        filter={`interested__user__profile=${profile_id}&ordering=-interested__created_on`}/>
                    )}
                    />
                    <Route exact path="/signin" render={() => <SignInForm />} />
                    <Route exact path="/signup" render={() => <SignUpForm />} />
                    <Route exact path="/events/create" render={() => <EventsCreateForm />} />
                    <Route exact path="/events/:id/edit" render={() => <EventsEditForm/>} />
                    <Route exact path="/events/:id" render={() => <EventPage />} />
                    <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
                    <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
                    <Route render={() => <p>Page not found!</p>} />
                </Switch>
            </Container>
        </div>       
    );
}

export default App;
