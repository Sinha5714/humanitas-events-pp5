# TESTING

## Table of Contents

1. [Device Testing](#device-testing)

### Device testing

- Project was tested using various devices and browsers

- Macbook Pro 2019 16-inch

  - Firefox

      <details><summary>Screenshot</summary>
      <img src="docs/manual-testing/firefox-home.png">
          
      </details>

  - Chrome

      <details><summary>Screenshot</summary>
      <img src="docs/manual-testing/chrome-home.png" >
      </details>

- Also tested various device sizes using [Dev.tools](https://developer.chrome.com/docs/devtools/)

### Manual testing of user stories

1. As a site user I can be able to navigate through pages so that I can be able to interact with the app easily

| **Step**                                                                                | **Expected Result**                              | **Actual Result** |
| --------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------- |
| User clicks on [website link](https://humanitas-events-pp5-fba97e12d8c2.herokuapp.com/) | Home page opens with Navbar for logged out users | Works as expected |
| Logged out user clicks on signin link on Navbar                                         | Signin page opens                                | Works as expected |
| Logged in user clicks on feed page link on Navbar                                       | Feed page opens                                  | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory1-1.png" >
<img src="docs/manual-testing/userstory1-2.png" >
<img src="docs/manual-testing/userstory1-3.png" >

</details>

2. As a site user I can sign up as new user so that I can interact with the site comfortably

| **Step**                                        | **Expected Result**                     | **Actual Result** |
| ----------------------------------------------- | --------------------------------------- | ----------------- |
| Logged out user clicks on signup link on Navbar | Signup page opens                       | Works as expected |
| User submit data in form successully            | Signin page opens and user is signed up | Works as expected |

 <details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory2-1.png" >
<img src="docs/manual-testing/userstory2-2.png" >
<img src="docs/manual-testing/userstory2-3.png" >

</details>

3. As a site user I can login as existing user so that I can interact with all features in the website

| **Step**                                        | **Expected Result**                   | **Actual Result** |
| ----------------------------------------------- | ------------------------------------- | ----------------- |
| Logged out user clicks on signin link on Navbar | Signin page opens                     | Works as expected |
| User submit data in form succesully             | Home page opens and user is signed in | Works as expected |

 <details><summary>Screenshots</summary>
<img src="docs/manual-testing/userstory3-1.png" >
<img src="docs/manual-testing/userstory3-2.png" >

</details>

4. As a site user I can logout so that I am sure my data is secured

| **Step**                                       | **Expected Result**                    | **Actual Result** |
| ---------------------------------------------- | -------------------------------------- | ----------------- |
| Logged in user clicks on logout link on Navbar | Home Page opens and user is logged out | Works as expected |

 <details><summary>Screenshots</summary>
<img src="docs/manual-testing/userstory4-1.png" >
<img src="docs/manual-testing/userstory4-2.png" >

</details>

5. As a site user I can I can see list of events so that that can view all the events happening around

| **Step**                                                                                | **Expected Result**      | **Actual Result** |
| --------------------------------------------------------------------------------------- | ------------------------ | ----------------- |
| User clicks on [website link](https://humanitas-events-pp5-fba97e12d8c2.herokuapp.com/) | Home page opens          | Works as expected |
| User scrolls through home page                                                          | Posted events are listed | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/manual-testing/userstory5.png" >

</details>

6. As a site user I can see detail page of the Event so that I can read about the Event and comment on it

| **Step**                                            | **Expected Result**      | **Actual Result** |
| --------------------------------------------------- | ------------------------ | ----------------- |
| User scrolls through home page                      | Posted events are listed | Works as expected |
| User clicks on events image link                    | Event detail page opens  | Works as expected |
| User clicks on events title link on upcoming events | Event detail page opens  | Works as expected |

 <details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory6-1.png" >
<img src="docs/manual-testing/userstory6-2.png" >
<img src="docs/manual-testing/userstory6-3.png" >
<img src="docs/manual-testing/userstory6-4.png" >

</details>

7. As a site user I can be able to post comments so that I can interact with other users

| **Step**                                            | **Expected Result**                             | **Actual Result** |
| --------------------------------------------------- | ----------------------------------------------- | ----------------- |
| User clicks on events image link                    | Event detail page opens                         | Works as expected |
| User clicks on events title link on upcoming events | Event detail page opens                         | Works as expected |
| Logged in user scrolls down to comment section      | Comment create form is visible with user avatar | Works as expected |
| Logged in user type comments and post               | Comment is added and displayed in comment list  | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory7-1.png" >
<img src="docs/manual-testing/userstory7-2.png" >

</details>

8. As a site user I can can edit my comments so that I can change what I commented before

| **Step**                                                          | **Expected Result**                                | **Actual Result** |
| ----------------------------------------------------------------- | -------------------------------------------------- | ----------------- |
| User clicks on events image link                                  | Event detail page opens                            | Works as expected |
| User clicks on events title link on upcoming events               | Event detail page opens                            | Works as expected |
| Logged in user scrolls down to comment section                    | Comment list is visible with user avatar           | Works as expected |
| Comment owner clicks on dropdown threedots next to their comments | Drop down menu with edit and delete button opens   | Works as expected |
| User clicks on edit icon                                          | Comment edit form opens                            | Works as expected |
| User changes comment and click on save                          | Updated comment is displayed with feedback message | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory8-1.png" >
<img src="docs/manual-testing/userstory8-2.png" >
<img src="docs/manual-testing/userstory8-3.png" >
<img src="docs/manual-testing/userstory8-4.png" >

</details>

9. As a site user I can delete my comments so that I can delete the comments which I don't want to show

| **Step**                                                          | **Expected Result**                              | **Actual Result** |
| ----------------------------------------------------------------- | ------------------------------------------------ | ----------------- |
| User clicks on events image link                                  | Event detail page opens                          | Works as expected |
| User clicks on events title link on upcoming events               | Event detail page opens                          | Works as expected |
| Logged in user scrolls down to comment section                    | Comment list is visible with user avatar         | Works as expected |
| Comment owner clicks on dropdown threedots next to their comments | Drop down menu with edit and delete button opens | Works as expected |
| User clicks on delete icon                                        | Comment is deleted with feedback message         | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory9-1.png" >
<img src="docs/manual-testing/userstory9-2.png" >
<img src="docs/manual-testing/userstory9-3.png" >

</details>

10. As a site user I can show interest in an event so that I can be interested in event which I like

| **Step**                                               | **Expected Result**                                   | **Actual Result** |
| ------------------------------------------------------ | ----------------------------------------------------- | ----------------- |
| Logged in user click on star icon in event card        | The star color changes and interested count increases | Works as expected |
| Logged in user click on interested icon link in Navbar | Events what user has shown interested is displayed    | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory10-1.png" >
<img src="docs/manual-testing/userstory10-2.png" >

</details>

11. As a site user I can remove my interests so that I can be remove my interests if not interested anymore

| **Step**                                               | **Expected Result**                                   | **Actual Result** |
| ------------------------------------------------------ | ----------------------------------------------------- | ----------------- |
| Logged in user click on star icon in event card        | The star color changes and interested count decreases | Works as expected |
| Logged in user click on interested icon link in Navbar | Events is removed                                     | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory11-1.png" >
<img src="docs/manual-testing/userstory11-2.png" >

</details>

12. As a site user I can add attending to an event so that I can add me in attending list

| **Step**                                            | **Expected Result**                                         | **Actual Result** |
| --------------------------------------------------- | ----------------------------------------------------------- | ----------------- |
| Logged in user click on attend button on event card | The text changes to attending and attending count increases | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/usertory12-1.png" >
<img src="docs/manual-testing/userstory12-2.png" >

</details>

13. As a site user I can delete my attending so that I can remove my data if not attending event

| **Step**                                               | **Expected Result**                                      | **Actual Result** |
| ------------------------------------------------------ | -------------------------------------------------------- | ----------------- |
| Logged in user click on attending button on event card | The text changes to attend and attending count decreases | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/manual-testing/userstory13-1.png" >
<img src="docs/manual-testing/userstory13-2.png" >

</details>

14. As a site user I can add events so that I can share the events which I am organising

| **Step**                                         | **Expected Result**          | **Actual Result** |
| ------------------------------------------------ | ---------------------------- | ----------------- |
| Logged in user click on add event link on Navbar | Event create form page opens | Works as expected |
| User fill data and submit form successfully      | Event created is displayed   | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/manual-testing/userstory14-1.png" >
<img src="docs/manual-testing/userstory14-2.png" >
<img src="docs/manual-testing/userstory14-3.png" >
<img src="docs/manual-testing/userstory14-4.png" >

</details>

15. As a site user I can edit event which I posted so that I can change the details if required

| **Step**                                                          | **Expected Result**                              | **Actual Result** |
| ----------------------------------------------------------------- | ------------------------------------------------ | ----------------- |
| User clicks on events image link                                  | Event detail page opens                          | Works as expected |
| User clicks on events title link on upcoming events               | Event detail page opens                          | Works as expected |
| Event owner clicks on dropdown threedots next to their event card | Drop down menu with edit and delete button opens | Works as expected |
| User clicks on edit icon                                          | Event edit form opens                            | Works as expected |
| User changes data of events and click on update                   | Success feedback modal is displayed              | Works as expected |
| User close the model                                              | Event card is displayed with updated data        | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory15-1.png" >
<img src="docs/manual-testing/userstory15-2.png" >
<img src="docs/manual-testing/userstory15-3.png" >
<img src="docs/manual-testing/userstory15-4.png" >
<img src="docs/manual-testing/userstory15-5.png" >

</details>

16. As a site user I can delete event which I posted so that I can remove event if its cancelled

| **Step**                                                          | **Expected Result**                                            | **Actual Result** |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | ----------------- |
| User clicks on events image link                                  | Event detail page opens                                        | Works as expected |
| User clicks on events title link on upcoming events               | Event detail page opens                                        | Works as expected |
| Event owner clicks on dropdown threedots next to their event card | Drop down menu with edit and delete button opens               | Works as expected |
| User clicks on delete icon                                        | Success feedback message displayed and user taken to home page | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/manual-testing/userstory16-1.png" >
<img src="docs/manual-testing/userstory16-2.png" >
<img src="docs/manual-testing/userstory16-3.png" >

</details>

17. As a site user I can view my profile or other's profile so that I can see my or their informations

| **Step**                                                                                       | **Expected Result**                               | **Actual Result** |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------- |
| User clicks on profile avatar in event card, comment list, top organisers                      | Individual profile page is open                   | Works as expected |
| Logged in user clicks on profile avatar in event card, comment list, top organisers and Navbar | User's profile page or clicked profile page opens | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

18. As a site user I can I can edit my profile so that I can change my data or update it

| **Step**                                                   | **Expected Result**                                                         | **Actual Result** |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------- |
| Logged in user clicks on profile avatar in Navbar          | User's profile page opens                                                   | Works as expected |
| Profile owner clicks on dropdown threedots in profile page | Drop down menu with edit profile, change username and change password opens | Works as expected |
| User clicks on edit profile                                | Profile edit form opens                                                     | Works as expected |
| User updates the data and click on update                  | Success Feedback model opens                                                | Works as expected |
| User close the model                                       | Profile page opens with updated data                                        | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >
<img src="" >

</details>

19. As a site user I can change my username so that can decide to change my username as I like

| **Step**                                                   | **Expected Result**                                                         | **Actual Result** |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------- |
| Logged in user clicks on profile avatar in Navbar          | User's profile page opens                                                   | Works as expected |
| Profile owner clicks on dropdown threedots in profile page | Drop down menu with edit profile, change username and change password opens | Works as expected |
| User clicks on change username                             | Change username form page opens                                             | Works as expected |
| User updates the data and click on change                  | Success Feedback model opens                                                | Works as expected |
| User close the model                                       | Profile page opens with updated username                                    | Works as expected |

 <details><summary>Screenshot</summary>
<img src="" >

</details>

20. As a site user I can change my password so that I can keep updating my password as I wish

| **Step**                                                   | **Expected Result**                                                         | **Actual Result** |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------- |
| Logged in user clicks on profile avatar in Navbar          | User's profile page opens                                                   | Works as expected |
| Profile owner clicks on dropdown threedots in profile page | Drop down menu with edit profile, change username and change password opens | Works as expected |
| User clicks on change password                             | Change password form page opens                                             | Works as expected |
| User updates the data and click on change                  | Success Feedback model opens                                                | Works as expected |
| User close the model                                       | Profile page opens                                                          | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >

</details>

21. As a site users I can follow/unfollow other users so that see the events what they posted in my post's feed

- Logged in user can see follow/unfollow button in top organisers and profilr page of users

| **Step**                                                          | **Expected Result**                                       | **Actual Result** |
| ----------------------------------------------------------------- | --------------------------------------------------------- | ----------------- |
| Logged in user clicks follow/unfollow button for individual users | The button text changes to follow/unfollow as per request | Works as expected |
| User opens his profile page                                       | His following counts changes                              | Works as expected |
| User opens profile page from user he followed/unfollowed          | The followers counts changes                              | Works as expected |

<details><summary>Screenshot</summary>
<img src="">
<img src="" >

</details>

22. As a site user I can see what events are upcoming so that I can see the events which are upcoming

| **Step**                   | **Expected Result**                          | **Actual Result** |
| -------------------------- | -------------------------------------------- | ----------------- |
| Once user open the website | Upcoming events are displayed in a container | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >
<img src="" >

</details>

23. As a site user I can see who are the top organisers so that I can follow them or see their profiles easily

| **Step**                        | **Expected Result**                                                                  | **Actual Result** |
| ------------------------------- | ------------------------------------------------------------------------------------ | ----------------- |
| Once user open the website      | Top organisers profiles are displayed on top of the page                             | Work as expected  |
| Logged in user open the website | Top organisers profiles are displayed on top of the page with follow/unfollow button | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >

</details>

24. As a site users I can view my avatar or other user's avatar so that I know with whom I am interacting

| **Step**                          | **Expected Result**                                                                        | **Actual Result** |
| --------------------------------- | ------------------------------------------------------------------------------------------ | ----------------- |
| Users opens the website           | He can see avatar of all profiles in event card, comment list and top organisers container | Work as expected  |
| Logged in users opens the website | He can also see his avatar in Navbar                                                       | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >

</details>

25. As a site user I can keep scrolling through the page and comments so that they are loaded automatically and I don't have to select next page

| **Step**                                       | **Expected Result**                                          | **Actual Result** |
| ---------------------------------------------- | ------------------------------------------------------------ | ----------------- |
| User opens the website and keep scrolling down | Events posted are getting loaded without need to change page | Work as expected  |
| Logged in user scrolls down to comment section | Comments keeps loading without need to change page           | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

26. As a site user I can be inform if my action has been successful so that I can be sure that my data is changed

| **Step**                               | **Expected Result**           | **Actual Result** |
| -------------------------------------- | ----------------------------- | ----------------- |
| Logged in user edit his event posted   | Feedback modal is displayed   | Work as expected  |
| Logged in user delete his posted event | Feedback message is displayed | Work as expected  |
| Logged in user update his comment      | Feedback message is displayed | Work as expected  |
| Logged in user delete his comment      | Feedback message is displayed | Work as expected  |
| Logged in user edit his profile        | Feedback modal is displayed   | Work as expected  |
| Logged in user change his username     | Feedback modal is displayed   | Work as expected  |
| Logged in user change his password     | Feedback modal is displayed   | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >
<img src="" >
<img src="" >
<img src="" >
<img src="" >
<img src="" >

</details>

27. As a site user I can search for events with keywords so that I can find the events I am interested in

| **Step**                                         | **Expected Result**                                        | **Actual Result** |
| ------------------------------------------------ | ---------------------------------------------------------- | ----------------- |
| User type username, title and date in serach bar | Events posted by that username, title or date is displayed | Work as expected  |
| User clicks on search buttons in categories      | Events as per that category is displayed                   | Work as expected  |
| User clicks on search buttons in sub-categories  | Events as per that sub-category is displayed               | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

28. As a site owner I can provide full access to logged in user so that they can interact with the pages more independently

| **Step**                                                        | **Expected Result**                                                               | **Actual Result** |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------- |
| User sign in in website                                         | Homepage opens with Navbar displaying links to all pages                          | Work as expected  |
| Logged in user opens his event detail page                      | A dropdown with edit and delete is provided for event                             | Work as expected  |
| Logged in user opens event detail page and scrolls down         | He can comment on the event posted                                                | Work as expected  |
| Logged in user opens comment list                               | A dropdown with edit and delete is provided for his comments                      | Work as expected  |
| Logged in user clicks on interested icon in event card          | Interested count increase                                                         | Work as expected  |
| Logged in user clicks on attend button in event card            | Attendees count increase                                                          | Work as expected  |
| Logged in user clicks on follow/unfollow button for other users | following count increase                                                          | Work as expected  |
| Logged in user opens his profile                                | Drop down menu with edit profile, change username and change password is provided | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

29. As a site owner I can restrict the interaction with website so that an unauthorised user cannot make changes in the app

| **Step**                                            | **Expected Result**                             | **Actual Result** |
| --------------------------------------------------- | ----------------------------------------------- | ----------------- |
| Logged out user opens website                       | Navbar has limited icons                        | Work as expected  |
| Logged out user opens profile page                  | No dropdown menu is provided                    | Work as expected  |
| Logged out try to show interest in an event         | An overlay message is displayed to be logged in | Work as expected  |
| Logged out try to add attend in an event            | An overlay message is displayed to be logged in | Work as expected  |
| Logged out opens event detail page to write comment | A message is displayed to be logged in          | Work as expected  |
| Logged out opens other's profile page               | No follow/unfollow button is displayed          | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

30. As a site owner I can make sure my site is responsive so that user can view the website in all devices without any problem

| **Step**                                                | **Expected Result**                                                      | **Actual Result** |
| ------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------- |
| Slice the upcoming events list for small devices        | User can see only 3 upcoming events in mobile                            | Work as expected  |
| Remove app label "Humanitas Events" for smaller devices | User cannot see label in mobile                                          | Work as expected  |
| Hamburger menu for small devices                        | Navbar menu is compressed to be shown as hamnurger menu in small devices | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

31. As a site owner I want users to come to a 404 error page so that they don't have to user the browser back button if they enter a URL that does not exist

| **Step**                               | **Expected Result**     | **Actual Result** |
| -------------------------------------- | ----------------------- | ----------------- |
| User tries to add url which is invalid | PageNotFound page opens | Work as expected  |
| User clicks on go to home button       | User taken to home page | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>
