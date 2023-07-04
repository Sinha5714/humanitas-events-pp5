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
<img src="" >

</details>

3. As a site user I can login as existing user so that I can interact with all features in the website

| **Step**                                        | **Expected Result**                   | **Actual Result** |
| ----------------------------------------------- | ------------------------------------- | ----------------- |
| Logged out user clicks on signin link on Navbar | Signin page opens                     | Works as expected |
| User submit data in form succesully             | Home page opens and user is signed in | Works as expected |

 <details><summary>Screenshots</summary>
<img src="" >
<img src="" >

</details>

4. As a site user I can logout so that I am sure my data is secured

| **Step**                                       | **Expected Result**                    | **Actual Result** |
| ---------------------------------------------- | -------------------------------------- | ----------------- |
| Logged in user clicks on logout link on Navbar | Home Page opens and user is logged out | Works as expected |

 <details><summary>Screenshots</summary>
<img src="" >
<img src="" >
<img src="" >

</details>

5. As a site user I can I can see list of events so that that can view all the events happening around

| **Step**                                                                                | **Expected Result**      | **Actual Result** |
| --------------------------------------------------------------------------------------- | ------------------------ | ----------------- |
| User clicks on [website link](https://humanitas-events-pp5-fba97e12d8c2.herokuapp.com/) | Home page opens          | Works as expected |
| User scrolls through home page                                                          | Posted events are listed | Works as expected |

<details><summary>Screenshots</summary>
<img src="" >

</details>

6. As a site user I can see detail page of the Event so that I can read about the Event and comment on it

| **Step**                                            | **Expected Result**      | **Actual Result** |
| --------------------------------------------------- | ------------------------ | ----------------- |
| User scrolls through home page                      | Posted events are listed | Works as expected |
| User clicks on events image link                    | Event detail page opens  | Works as expected |
| User clicks on events title link on upcoming events | Event detail page opens  | Works as expected |

 <details><summary>Screenshot</summary>
<img src="" >

</details>

7. As a site user I can be able to post comments so that I can interact with other users

| **Step**                                            | **Expected Result**                             | **Actual Result** |
| --------------------------------------------------- | ----------------------------------------------- | ----------------- |
| User clicks on events image link                    | Event detail page opens                         | Works as expected |
| User clicks on events title link on upcoming events | Event detail page opens                         | Works as expected |
| Logged in user scrolls down to comment section      | Comment create form is visible with user avatar | Works as expected |
| Logged in user type comments and post               | Comment is added and displayed in comment list  | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

8. As a site user I can can edit my comments so that I can change what I commented before

| **Step**                                                          | **Expected Result**                              | **Actual Result** |
| ----------------------------------------------------------------- | ------------------------------------------------ | ----------------- |
| User clicks on events image link                                  | Event detail page opens                          | Works as expected |
| User clicks on events title link on upcoming events               | Event detail page opens                          | Works as expected |
| Logged in user scrolls down to comment section                    | Comment list is visible with user avatar         | Works as expected |
| Comment owner clicks on dropdown threedots next to their comments | Drop down menu with edit and delete button opens | Works as expected |
| User clicks on edit icon                                          | Comment edit form opens                          | Works as expected |
| User changes comment and click on update                          | Updated comment is displayed with feedback message                    | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

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
<img src="" >
<img src="" >
<img src="" >

</details>

10. As a site user I can show interest in an event so that I can be interested in event which I like

| **Step**                                               | **Expected Result**                                   | **Actual Result** |
| ------------------------------------------------------ | ----------------------------------------------------- | ----------------- |
| Logged in user click on star icon in event card        | The star color changes and interested count increases | Works as expected |
| Logged in user click on interested icon link in Navbar | Events what user has shown interested is displayed    | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >

</details>

11. As a site user I can remove my interests so that I can be remove my interests if not interested anymore

| **Step**                                               | **Expected Result**                                   | **Actual Result** |
| ------------------------------------------------------ | ----------------------------------------------------- | ----------------- |
| Logged in user click on star icon in event card        | The star color changes and interested count decreases | Works as expected |
| Logged in user click on interested icon link in Navbar | Events is removed                                     | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >

</details>

12. As a site user I can add attending to an event so that I can add me in attending list

| **Step**                                            | **Expected Result**                                         | **Actual Result** |
| --------------------------------------------------- | ----------------------------------------------------------- | ----------------- |
| Logged in user click on attend button on event card | The text changes to attending and attending count increases | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

13. As a site user I can delete my attending so that I can remove my data if not attending event

| **Step**                                               | **Expected Result**                                      | **Actual Result** |
| ------------------------------------------------------ | -------------------------------------------------------- | ----------------- |
| Logged in user click on attending button on event card | The text changes to attend and attending count decreases | Works as expected |

<details><summary>Screenshots</summary>
<img src="" >
<img src="" >

</details>

14. As a site user I can add events so that I can share the events which I am organising

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
| Logged in user click on add event link on Navbar | Event create form page opens | Works as expected |
| User fill data and submit form successfully | Event created is displayed | Works as expected |

<details><summary>Screenshots</summary>
<img src="" >
<img src="" >
<img src="" >

</details>

15. As a site user I can edit event which I posted so that I can change the details if required

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
| User clicks on events image link                                  | Event detail page opens                          | Works as expected |
| User clicks on events title link on upcoming events               | Event detail page opens                          | Works as expected |
| Event owner  clicks on dropdown threedots next to their event card                 |   Drop down menu with edit and delete button opens     | Works as expected |
| User clicks on edit icon                                          | Event edit form opens                          | Works as expected |
| User changes data of events and click on update                          |  Success feedback modal is displayed                     | Works as expected |
| User close the model                          |  Event card is displayed with updated data                  | Works as expected |

<details><summary>Screenshot</summary>
<img src="" >

</details>

16. As a site user I can delete event which I posted so that I can remove event if its cancelled

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >

</details>

17. As a site user I can view my profile or other's profile so that I can see my or their informations

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

18. As a site user I can I can edit my profile so that I can change my data or update it

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >
<img src="" >

</details>

19. As a site user I can change my username so that can decide to change my username as I like

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

 <details><summary>Screenshot</summary>
<img src="" >

</details>

20. As a site user I can change my password so that I can keep updating my password as I wish

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >

</details>

21. As a site users I can follow/unfollow other users so that see the events what they posted in my post's feed

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="">
<img src="" >

</details>

22. As a site user I can see what events are upcoming so that I can see the events which are upcoming

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >
<img src="" >

</details>

23. As a site user I can see who are the top organisers so that I can follow them or see their profiles easily

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >

</details>

24. As a site users I can view my avatar or other user's avatar so that I know with whom I am interacting

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >

</details>

25. As a site user I can keep scrolling through the page and comments so that they are loaded automatically and I don't have to select next page

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

26. As a site user I can be inform if my action has been successful so that I can be sure that my data is changed

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >
<img src="" >

</details>

27. As a site user I can search for events with keywords so that I can find the events I am interested in

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

28. As a site owner I can provide full access to logged in user so that they can interact with the pages more independently

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

29. As a site owner I can provide full access to logged in user so that they can interact with the pages more independently

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

30. As a site owner I can make sure my site is responsive so that user can view the website in all devices without any problem

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>

31. As a site owner I want users to come to a 404 error page so that they don't have to user the browser back button if they enter a URL that does not exist

| **Step** | **Expected Result** | **Actual Result** |
| -------- | ------------------- | ----------------- |
|          |                     | Work as expected  |
|          |                     | Work as expected  |
|          |                     | Work as expected  |

<details><summary>Screenshot</summary>
<img src="" >
<img src="" >

</details>
