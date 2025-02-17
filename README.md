# Sunnies

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0.0-yellow.svg)](https://vitejs.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black.svg)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9.0.0-orange.svg)](https://firebase.google.com/)
[![Headless UI](https://img.shields.io/badge/Headless%20UI-1.7.14-purple.svg)](https://headlessui.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.2-blueviolet.svg)](https://tailwindcss.com/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-5.3.6-pink.svg)](https://styled-components.com/)
[![React Icons](https://img.shields.io/badge/React%20Icons-4.8.0-lightgrey.svg)](https://react-icons.github.io/react-icons/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Features of the Application](#features-of-the-application)
- [Preview of Sunnies](#preview-of-sunnies)
- [Links](#links)
- [Quick Start](#quick-start)
- [Built Using](#built-using)
- [License](#license)

## Description

Sunnies is a beautifully designed symptom and mood tracking app built with React, Vite, Next.js, and Firebase to help
users gain insight into their well-being. By allowing users to log their daily moods, symptoms, and personal notes,
Sunnies helps visualize patterns over time and empowers individuals to take charge of their mental and physical health.

## User Story

```
AS a user
I WANT to be able to track my moods, symptoms, and notes about my overall health
SO THAT I can better understand my mental and physical well-being
```

## Features of the Application

```
GIVEN a new or returning user visits the app
WHEN they attempt to access their saved entries
THEN they are prompted to sign in or create an account

GIVEN a user is on the sign-in page
WHEN they enter their credentials and submit the form
THEN they are authenticated and redirected to their dashboard

GIVEN a user does not have an account
WHEN they navigate to the sign-up page and enter their details
THEN a new account is created, and they are logged into the app

GIVEN a user wants to sign out
WHEN they click the "Logout" button in the dashboard
THEN they are securely logged out

GIVEN a user is on the dashboard
WHEN they select a day and add mood, symptoms, and notes
THEN the entry is saved in the database

GIVEN a user has already logged an entry on a past date
WHEN they click on that date
THEN the previously logged mood, symptoms, and notes prepopulate in the form
AND a confirmation message appears before editing past entries

GIVEN a user logs an entry
WHEN they revisit the app on a different device
THEN their previous entries are still accessible, ensuring data persistence
```

## Preview of Sunnies

![Sunnies Landing Page](https://github.com/user-attachments/assets/538d7d02-d407-4aad-a752-5bfa71cb2745)


The following animation demonstrates the complete application functionality:

![Sunnies Functionality](https://github.com/user-attachments/assets/7447586c-ba2b-4d93-8263-c44544193043)


## Links

1. [Deployed Application](https://sunniest-days.netlify.app)

2. [Github Repository](https://github.com/rh9891/Sunnies)

## Quick Start

Run the application locally with these steps:

```
$ npm install
```

```
$ npm run dev
```

## Built Using

This project was built using the following technologies:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Headless UI](https://headlessui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## License

The MIT License (MIT)

Copyright (c) 2025 Romie Hecdivert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
