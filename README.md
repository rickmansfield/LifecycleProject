# Module Project: Component Lifecycle Methods - React Github User Card

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored lifecycle methods in class components. In your project you will demonstrate proficiency of these concepts by recreating the Github User Card project, but as a React application this time.

- [Module Project: Component Lifecycle Methods - React Github User Card](#module-project-component-lifecycle-methods---react-github-user-card)
  - [Introduction](#introduction)
    - [Commits](#commits)
  - [Instructions](#instructions)
    - [Task 1: Project Set Up](#task-1-project-set-up)
    - [Task 2: Minimum Viable Product](#task-2-minimum-viable-product)
      - [Planning your App](#planning-your-app)
      - [Fetch the User Data](#fetch-the-user-data)
      - [Display the User Data](#display-the-user-data)
      - [Fetch the User's Followers](#fetch-the-users-followers)
      - [Style the User Card](#style-the-user-card)
      - [Project Retrospective](#project-retrospective)
    - [Task 3: Stretch Problems](#task-3-stretch-problems)
  - [Submission Format](#submission-format)
  - [Rick Mansfield's PUll Request Link](#rick-mansfields-pull-request-link)
  - [Resources](#resources)
    - [Module Materials:](#module-materials)
  - [Key Terminology:](#key-terminology)
    - [Class Based Component Tutorial](#class-based-component-tutorial)
    - [More On FETCH used in APP.js](#more-on-fetch-used-in-appjs)
## Introduction

**Read these instructions carefully. Understand exactly what is expected _before_ starting this project.**

### Commits

Commit your code regularly and meaningfully. This helps you and any collaborators in case you ever need to return to old code for any number of reasons.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] Use CRA to create a new React app in this repository
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into main (student's Repository). **Please don't merge your own pull request**
- [ ] From the home page of your repo, make sure you have your branch selected
- [ ] Copy the URL and paste it into Canvas

### Task 2: Minimum Viable Product

- [ ] Fetch data from the Github API for a Github user
- [ ] Display the user data on the DOM
- [ ] Use class components when you need to hold any state or use any lifecycle methods

#### Planning your App

This is an important step for any project you will be working on. You will want to plan out what data you will need, which component will manage that data via state, what functions you may need to update that state, and where you need to pass the data to render it to the DOM. I love to use pen and paper or a whiteboard for this. The visuals can help a lot when you're deep into your code. After I finish that, I will write out a list of steps that I think it will take to build the app. This gives me a starting point, and direction as I proceed. This list always changes a bit as you are building, but it should give you a good flow and some good anchor points.

Also, since you have used the Github API before, you know some of the gotchas. Make sure to plan and watch for those.

When you have those completed, you're ready to start coding!

#### Fetch the User Data

- When your component mounts, send a GET request to the following URL (replacing the palceholder with your Github name):
  - https://api.github.com/users/<your name>
- After you fetch your data, set it to state

#### Display the User Data

- Pass the data to the component that will be displaying it
- Build out a user card using the data that the Github API returns to you
  - You may reference your old project for this, or you may wish to build this from scratch yourself

#### Fetch the User's Followers

- When your component mounts, you will also fetch the user's followers using this endpoint:
  https://api.github.com/users/< Your github name >/followers
- Set that data to state as well, and display the data in your app

#### Style the User Card

- Now it's time to style up your app
- You are free to choose how you style your app, but make it look as presentable as you can
- Try something new here. Maybe that's a new CSS technique you haven't really practiced yet. Maybe it's using a styling library you haven't tried. Push yourself to get better in this area.

#### Project Retrospective

Now that you have completed the MVP, I want you to think about the process it took you to get here. Is there anything you wish you had planned better? Anything you would do differently? Now take a minute think about how you would accomplish these same objectives with function components and hooks. You have experience with both formats now, so you can form opinions, but more importantly, you can back up those opinions. That's a really exciting level to be at! If you have time now, go ahead and move onto the stretch problems.

### Task 3: Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- Build a form that allows you to search for different Github users. When the form is submitted, use `componentDidUpdate` to fetch the data for the user you typed in. Set that new user's data to state to trigger the component to rerender and display your new user. Don't forget to fetch their followers as well.

- Look into adding your GitHub contribution graph. There are a number of different ways of doing this, this Stack Overflow discussion will get you started: https://stackoverflow.com/questions/34516592/embed-github-contributions-graph-in-website

## Submission Format

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into `main` (student's Repository). **Please don't merge your own pull request**
- [ ] From the home page of your repo, make sure you have your branch selected
- [ ] Copy the URL and paste it into Canvas to submit your project

## Rick Mansfield's PUll Request Link
- [Link for Convenience](https://github.com/LambdaSchool/web-module-project-lifecycle/pull/91)


## Resources

### Module Materials:
- Module Project : https://github.com/LambdaSchool/web-module-project-lifecycle 
- GP Slides : https://docs.google.com/presentation/d/1XMqnuxSv2qh1vWfvV-AvqtVZmaZOYP1llu0RrbbHEwo/edit?usp=sharing 
- Yesterday’s Module Project Review:https://www.loom.com/share/f856074dad7b4b75af2c8463f7bd8fabPW: eX51kj
- Alternative Lecture [Video:Dustin Myers|Josh Jacobson|Warren C. Longmire|Brian Kirkby](https://youtu.be/YGPOda5hPm0)
## Key Terminology:
- ComponentDidMount - [The React.Component derived method that is triggered after a component initially mounts.](https://linguinecode.com/post/understanding-react-componentdidmount)
- ComponentDidUpdate - [The React.Component derived method that is triggered any time a component update props or state.](https://dev.to/cesareferrari/how-to-use-componentdidupdate-in-react-30en)
- ComponentWillUnmount - [The React.Component derived method that is triggered when a component is removed from the DOM.
Key Concepts:](https://learn.co/lessons/react-component-mounting-and-unmounting)
- React Lifecycle - [The overall flow of code execution throughout the birth, operation and death of a React component.
Stretch Tutorial:](https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b)
Head-to-Toe Class based Component Tutorial

### Class Based Component Tutorial
  [Link](https://medium.com/bb-tutorials-and-thoughts/react-understanding-component-lifecycle-methods-1aaa32b33047)

  ### More On FETCH used in APP.js
  - [Link to Warren's Video](https://lambdaschool.enterprise.slack.com/files/W01B388BS9E/F029WL8LR4N/zoom_0.mp4)
  - [also at](src/media/zoom_0.mp4) 