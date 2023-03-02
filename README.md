# Twitter App

App built with React (frontend) and Express (backend) that pulls tweets data from [Twitter API](https://developer.twitter.com/en/docs).

View Application on [Heroku](https://naamp-twitter-app.herokuapp.com/)

<img src="https://user-images.githubusercontent.com/53867191/222491102-232ec168-6e65-4d9b-ab5d-da7d90ede8f8.png" />

<img src="https://user-images.githubusercontent.com/53867191/92256203-6c291b00-eea1-11ea-99b1-4334fd3ab7a5.png" />

## Summary

This is my first full-stack application.

- The frontend's main responsibility is to display a nice UI.
- The backend's main responsibility is to communicate with External API and serve up a static file with its server. I set up a backend server using the Express framework.

On the frontend side, this is a static file/UI that allows users to search for tweets. Once the user inputs a search query, that query string gets sent to the backend.

On the backend side, once it gets a query string from the frontend, it then sends a request to the external API and it then received tweet data back from the external API.

Finally, with internal API, the front end grabs the ready-to-display tweet data from the backend to display it.

Key Takeaways: It's interesting to see the segregation of duties of each part of the applications. I also get to play around debugging tools on VScode which is pretty interesting. Finally, I get to build and understand the whole full-stack process which is awesome!. :)

## Built With

- Environment - [NodeJs](https://nodejs.org/en/)
- Frontend - [ReactJs](https://reactjs.org/) + [Bootstrap](https://getbootstrap.com/) & [Reactstrap](https://reactstrap.github.io/)
- Backend - [ExpressJs](https://expressjs.com/)

## Installation
1. Run `npm install` in root folder
2. Run `npm install --prefix client` in root folder
3. Run `npm run dev` to start the server
4. Open browser at `http://localhost:5000`


## Deployment

- [Heroku](https://www.heroku.com)

## Author

- Naam Pondpat - _Full Stack Software Developer_ - [LinkedIn](https://www.linkedin.com/in/naam-pondpat-638153150/)
