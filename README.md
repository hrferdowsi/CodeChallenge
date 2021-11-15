# Qantas code challenge

Thi code is written by [Reza Fer](https://www.linkedin.com/in/reza-fer/) as part of the interview process.

## Approach


This project was initiated with the create-react-app and more dependencies were added for development and testing. I used webstorm for my IDE therefore codes might look different in VSCode as it uses different formatter. Typings are located under src/typings directory. Application mainly consists of three components of App, Card, Header and their associated test files are located under same directory.
For unit testing, I used Jest(Enzyme), which its configs are in setupTests.ts
and jest.config.ts. 

I tried to avoid inline styling and located the styles under the styles' directory. However,
there might be places where I left the code as it is due to the short of time. In terms of the structure, some files might not be in the order of your like but I tried to follow a general enterprise 
standard for React Application. Some codes could have broken down into seperated files (like styled components) but I think for this code challenge, the code organised enough.

Please do not hesitate to contact me if you have any questions about this code challenge.


## Available Scripts

### `yarn start / npm run start

Runs the app in the development mode on port 3000.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### yarn test and yarn test:watch

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

