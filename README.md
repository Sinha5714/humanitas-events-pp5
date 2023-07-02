# Humanitas Events

Developer: Shubham Sinha

![Mockup image](docs/readme/am-i-responsive.png)

[View live website](https://humanitas-events-pp5-fba97e12d8c2.herokuapp.com/)

## Table of Contents

0. [About](#about)

1. [Project Goals](#project-goals)

   1. [User Goals](#user-goals)

2. [User Experience](#user-experience)

   1. [Target Audience](#target-audience)
   2. [User Requirements and Expectations](#user-requirements-and-expectations)
   3. [User Stories](#user-stories)
   4. [Site Owner Stories](#site-owner-stories)

3. [Technologies Used](#technologies-used)

   1. [Languages](#languages)
   2. [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
   3. [Tools & Programs](#tools--programs)

# About

- Humanitas Events is a platform where organisers can share the events they are organising related to human-rights topics.
- The app is also for people who are looking for the events happening around related to human-rights
- Everyone can show interest in the events, show they are attending, comment and interact with other users
- Users can also follow one another to easily see new events of their favourite organisers

---

## Project Goals

- The goal for this project was to build a platform to enable users to interact with the website in various ways such as commenting on events posted, show interest in an event, show atttending the event or following other's profile. The idea was to keep the portal very simple and for the eductional purpose.

The key functionality aspects:

- simple and intuitive navigation across all pages
- user authentication
- user interaction via events, comments, interested, attending, followers
- user profiles with their description and images
- CRUD functionality for events posted, comments, interested, attending and profile information
- events filtering by title,owner, category and sub_category
- events filtering by interested posts and followed users posts
- responsiveness to allow users use the app on various devices

### User Goals

- Ability to post an event
- Be able to comment on an event
- Ability to amend and update content
- Chance to connect with a variety of interesting individuals.
- Able to show interests in an event
- Able to show attending in an event

## User Experience

### Target Audience

- Users or organisers conducting events related to human rights topic
- Users who want to join an event related to human rights topics

### User Requirements and Expectations

- Application with a clear purpose
- An user-friendly interface that allows quick and efficient navigation
- Responsive and visually good design
- Engaging content within the limits of set categories
- Ways to engage with other users or organisers

### User stories

1. As a site user I can be able to navigate through pages so that I can be able to interact with the app easily
2. As a site user I can sign up as new user so that I can interact with the site comfortably
3. As a site user I can login as existing user so that I can interact with all features in the website
4. As a site user I can logout so that I am sure my data is secured
5. As a site user I can I can see list of events so that that can view all the events happening around
6. As a site user I can see detail page of the Event so that I can read about the Event and comment on it
7. As a site user I can be able to post comments so that I can interact with other users
8. As a site user I can can edit my comments so that I can change what I commented before
9. As a site user I can delete my comments so that I can delete the comments which I don't want to show
10. As a site user I can show interest in an event so that I can be interested in event which I like
11. As a site user I can remove my interests so that I can be remove my interests if not interested anymore
12. As a site user I can add attending to an event so that I can add me in attending list
13. As a site user I can delete my attending so that I can remove my data if not attending event
14. As a site user I can add events so that I can share the events which I am organising
15. As a site user I can edit event which I posted so that I can change the details if required
16. As a site user I can delete event which I posted so that I can remove event if its cancelled
17. As a site user I can view my profile or other's profile so that I can see my or their informations
18. As a site user I can I can edit my profile so that I can change my data or update it
19. As a site user I can change my username so that can decide to change my username as I like
20. As a site user I can change my password so that I can keep updating my password as I wish
21. As a site users I can follow/unfollow other users so that see the events what they posted in my post's feed
22. As a site user I can see what events are upcoming so that I can see the events which are upcoming
23. As a site user I can see who are the top organisers so that I can follow them or see their profiles easily
24. As a site users I can view my avatar or other user's avatar so that I know with whom I am interacting
25. As a site user I can keep scrolling through the page and comments so that they are loaded automatically and I don't have to select next page
26. As a site user I can be inform if my action has been successful so that I can be sure that my data is changed

### Site Owner Stories

27. As a site owner I can provide full access to logged in user so that they can interact with the pages more independently
28. As a site owner I can restrict the interaction with website so that an unauthorised user cannot make changes in the app
29. As a site owner I can make sure my site is responsive so that user can view the website in all devices without any problem

## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - React (17.0.2)

### Libraries, frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - axios were used for promise-based HTTP. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [ClassNames](https://www.npmjs.com/package/classnames/) - JavaScript utility for conditionally joining classNames together, used in the FeedbackMsg component. This is used to apply the styles dynamically based on the type of style and apply more than one style to elements in FeedbackMsg component
- [JWT](https://jwt.io/) - library to decode out JSON Web token. Justification: I used JWT to prevent unauthenticated user from making extra network requests to refresh their access token. Also used to remove the timestamp from the browser when the user refreshes token expires or the user logs out.
- [Popper](https://popper.js.org/) - a 3rd party library used by React-Bootstrap. Justification: I used Popper to make sure the dropdown menus position is fixed on all browsers.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) - Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - Justification: I used this component to load content (posts/comments) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - used for dynamic routing. Justification: I used this library to enable the navigation among views of various components and control what the user sees depending on the URL they have accessed in the browser.

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) was used to create the multi-device mock-up at the top of this README.md file
- [Balsamiq](https://balsamiq.com/) to create the projects wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) to store static files
- [Coolors](https://coolors.co/?home) was used to create the color scheme palette
- [Favicon.io](https://favicon.io) for making the site favicon
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- [Google Fonts](https://fonts.google.com/) - import of font for the website
- [CodeAnyWhere](https://app.codeanywhere.com/) was IDE used for writing code and to push the code to GitHub
- Validation:
  - [WC3 Validator](https://validator.w3.org/) was used to validate the html
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the css
  - [ESLint](https://eslint.org/) used to validate JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) used to validate performance, accessibility, best practice and SEO of the app

##### Back to [top](#table-of-contents)
