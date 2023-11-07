# Flavour Finder

Flavour Finder is a recipe sharing platform where users can sign up and login to allowing users to create, edit, update and delete recipes.

We had 10 days to make a working application which was both back-end and front-end and I worked with two other people (Luke and Jill).

## Deployment Link:
[Live Deployment](https://flavour-finder-app-5a242c6325e0.herokuapp.com/ )

## Technologies Used 💡

- HTML5
- Saas
- React.js
- Node.js
- Javascript
- Express
- Mongo and Mongoose
- Cloudinary
- Heroku

## Brief

- Build a full-stack application by making your own backend and your own front-end
- Use an Express API to serve your data from a Mongo database
- Consume your API with a separate front-end built with React
- Be a complete product with multiple relationships and CRUD functionality for at least a couple of models

## Planning

### Wireframe

We created a wireframe using figma as we knew we needed to have our ideas written down and decided on the colour scheme. Then we went onto creating our models, controllers as well as deciding on our components in the front end.

![Wireframe](/client/src/images/figma-wireframe.png)

### Trello

We used Trello to organise everything that we needed to do for our project. We added a To Do, In Progress and Completed section as well as any stretch goals we wanted to implement after we completed our MVP's.

![Trello](/client/src/images/trello.png)


### Build Process

We all decided to work on parts of the backend and the frontend as we wanted experience on both. We divided up our tasks and each of us chose what we wanted to do. Firstly we started off on the backend, Luke and I decided to pair programm, I created the user and recipe controllers and he created the models, whilst Jill created the seed data using AI. We used Mongoose as our ORM (Object relational mapping) for configuring the database with our CRUD functionality.

![Register-route](/client/src/images/register-route.png)

In the recipe controllers, I specifically created the index, show, create, update and delete routes.

![Recipe-routes](/client/src/images/recipe-routes.png)

### My Responsibilities

#### Client Side:

- Making the client side React components that were responsible for creating and updating the recipes via HTML forms.
- I implemented the carousel component using Bootstrap to showcase randomised recipes.
- Created the single recipe component with data fetching from the API.

#### Server Side:
- Created all of the API routes using Express.js, including the user and recipe controllers.

### Challenges:

When rendering a list of elements in React, it's crucial to assign a proper and unique `key` to each element to help React identify which items have changed, are added, or are removed. 

Using the index as a key can cause issues because the key will change if the item's order changes. This lead to problems like:

- Incorrectly mutating state.
- Unintended side effects during re-renders.
- Poor performance on updates, as React cannot accurately track the identity of each component.

```js
// Example of a problematic key usage:
{myList.map((val, index) => (
  <div key={index}>...</div>
))}
```

Instead I implemented a unique UUID for each key using the uuid4 package. This ensures that each element has a stable identity across re-renders, making state management predictable and efficient.

```js
import { v4 as uuidv4 } from 'uuid';

// Example of using UUIDs for keys:
{myList.map((val) => (
  <div key={uuidv4()}>...</div>
))}

```

### Wins

- Users can easily add or remove methods and ingredients, making it a better user experience.
- Working on the create and update section, which was tightly coupled with other components (including the authentication and API layer ), meant I had to understand every layer of the application.

### Key Learnings

- Feeling more confident with Bootstrap to build more interactive components.
- Gained a better understanding using Express.js such as making the controllers and the routes.

### Future Improvements

- Allow users to like, favourite and leave reviews for shared recipes.