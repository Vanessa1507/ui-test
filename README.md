# Zemoga Front End Development - UI Test

This test was about a website called 'Rule of Thumb' that tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. This project lets their users share their opinion about different celebrities in an easy way. This website uses votes represented with thumb up and down buttons and their interaction has an effect into it that represents the results  of both parameters. On the other hand, this website should be responsive so it adapts to smartphones, tablet and desktop.

## Development

For this project, I used React because from my point of view it is a powerful framework since it allows me to create better interfaces and a good experience for the users, but also because with this framework it is easier to understand and more organized (obviously when you have good practices).

To the styles, I used pure css to create the styles of the project, but also I used Sass preprocessor because I can create variables that represent the colors, fonts, and sizes that are transversal of the project. If I have to change some of them, it would be easy because I only have to change the value of these variables. But also for the hierarchy because I can group the elements and apply the styles that  I want to,  and because I can reduce the code lines because I don't have to repeat the same lines for different tags or classes if I use @extend rule.

With this in mind, I re-structured the project in different components that I identified. I did that because if in the future I have to create some functionality, add new elements, put that one in another component or remove the component it would be easier this process and I can have its elements and its functionality separated to the rest ones. Later I started to create the requirements of the project, for this I used the React Tracked dependency to control the global state, I created a personalized hook to control some functionality inside the components and the LocalStorage to persist the data.

Finally, this is the result of my test, I hope you enjoy interacting with that as I enjoyed developing it. Thank you for giving me the opportunity and I am awaiting your feedback 😁.

#### [Demo](https://ui-test-vanessa-suarez.vercel.app/)

## Manual

### `yarn install`
Install all dependencies for the project.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
