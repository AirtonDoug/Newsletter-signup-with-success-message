# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
 
 Main Page
![](./Screenshot%202023-09-28%20at%2019-05-15%20Screenshot.png)

Confirmation Page
![](./Screenshot%202023-09-28%20at%2019-06-09%20Screenshot.png)




### Links

- Solution URL: [Add solution URL here](https://github.com/AirtonDoug/Newsletter-signup-with-success-message)
- Live Site URL: [Add live site URL here](https://newsletter-signup-with-success-message-mu.vercel.app/

## My process

### Built with

- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles


### What I learned


In this project I've learned how to make a function to validate email

```js
const validateEmail = (email) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email)

  }
```


### Continued development

I need to focus on how to think in react and separate the components from application in a better way
i only have used the container and button component but I tink that was a very simple  project and what I do I think work well. 


### Resources
  [w3resource](https://www.w3resource.com/javascript/form/email-validation.php)

## Author


- Frontend Mentor - [@AirtonDoug](https://www.frontendmentor.io/profile/AirtonDoug)

