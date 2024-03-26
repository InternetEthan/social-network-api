# social-network-api

This project is a social network API built with Express.js and MongoDB. It allows users to create, read, update, and delete users and thoughts, and add or remove friends to a user's friend list. Users can also add reactions to thoughts.

## Project Structure

- `models/`: This directory contains the Mongoose schemas and models for the User, Thought, and Reaction entities.
- `controllers/`: This directory contains the controller functions for handling HTTP requests related to users and thoughts.
- `routes/`: This directory contains the route definitions for the API.
- `seed.js`: This file is used to seed the database with initial data.

## Models

- `User`: Represents a user in the social network. Each user has a username, email, and lists of thoughts and friends.
- `Thought`: Represents a thought posted by a user. Each thought has a text, a username of the user who posted it, and a list of reactions.
- `Reaction`: Represents a reaction to a thought. Each reaction has a body and a username of the user who posted it.

## Controllers

- `userController`: Handles requests related to users. It supports operations like getting all users, getting a user by ID, creating a user, updating a user, deleting a user, adding a friend to a user's friend list, and removing a friend from a user's friend list.
- `thoughtController`: Handles requests related to thoughts. It supports operations like getting all thoughts, getting a thought by ID, creating a thought, updating a thought, deleting a thought, adding a reaction to a thought, and removing a reaction from a thought.

## Routes

- `userRoutes`: Defines the routes for handling requests related to users.
- `thoughtRoutes`: Defines the routes for handling requests related to thoughts.

## Seed

The `seed.js` file is used to seed the database with initial data. It creates some users and thoughts, and adds some reactions to the thoughts.

## Usage

To use this project, you need to have Node.js and MongoDB installed. Clone the repository, navigate to the project directory in your terminal, and run `npm install` to install the dependencies. Then, you can run `node seed.js` to seed the database with initial data, and `npm start` to start the server. The API will be available at `http://localhost:3001/api`.

## Endpoints

- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update a user by ID.
- `DELETE /api/users/:userId`: Delete a user by ID.
- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.
- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID.
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.