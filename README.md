# Week 3 Assignment: Life Tracker

Submitted by: **Leonel Rivera-Castro**

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE) I ran into issues with Heroku but Matt said it was okay :)

## Application Features

### Core Features

- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [X] If the user is logged in, it should display a **Sign Out** button. 
  - [X] If no user is logged in, it should display **Login** and **Register** buttons
  - [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [X] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [X] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [X] The detailed activity page should display a feed of all previous tracked activities.
- [X] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [X] The activity tracked should be given a unique id for easy lookup.
  * [Table Schema] https://github.com/lriveracastro407/life-tracker/blob/master/life-tracker-api/lifetracker-schema.sql
  * SELECT SUM(duration)
      FROM exercise
      WHERE user_id = $1
  * SELECT AVG(intensity)
      FROM exercise
      WHERE user_id = $1
      

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

<iframe width="640" height="400" src="https://www.loom.com/embed/7bed00443f6642ef836b4ad454d6de73" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

if it doesn't work heres the link :) https://www.loom.com/share/7bed00443f6642ef836b4ad454d6de73
### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics covered in the week 3 labs were essential in completing the assignment. The labs about JWT and creating a website with SQL were very helpful as it helped me understand what I need to do for the assignment on the backend. However, I did struggle a lot
with the frontend as I feel like we've had less exposure to React. I had to get a lot of help and assistance from my teammates and instructors to complete the frontend. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time I would've tried to add in the routes, models, and pages for sleep and nutrition. I feel like adding in three activites instead of one really elevates the website and the product but I wasn't able to because of the issues I ran into with React. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I felt like my project demo was rough because I had one really big error on the frontend that was affecting the presentation. I noticed that a lot of my peers focused a lot on design and added in little things made their project feel well-thought out. Next time for the Capstone I'll definitely try to add in small details that make the website feel different. 

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I want to give a big shoutout to my wonderful Capstone group that worked with me and helped me out. During workhours my power went out so I couldn't do work for a few hours, but my team met with me after work and tried to get me caught up and helped me with some of the bugs I was working on. 
