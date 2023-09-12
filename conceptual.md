### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
# Using promises, .then, and async/await.

- What is a Promise?
# A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

- What are the differences between an async function and a regular function?
 # An async function is a function that returns a promise. A regular function does not return a promise. An async function can contain an await expression that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.

- What is the difference between Node.js and Express.js?
# Node.js is a runtime environment for JavaScript that allows you to run JavaScript on the server. Express.js is a framework that runs on top of Node.js and makes it easier to build web applications and APIs.

- What is the error-first callback pattern?
# The error-first callback pattern is a convention for Node.js callbacks to accept an error object as their first argument. If there is no error, the first argument is null or undefined.

- What is middleware?
# Middleware is a function that has access to the request and response objects and the next middleware function in the application's request-response cycle. Middleware functions can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack.

- What does the `next` function do?
 # The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
# The code above is not very performant because it is making three separate requests to the GitHub API. It would be better to make one request to the GitHub API and use Promise.all to wait for all of the requests to resolve. The code above is also not very readable because the variable names are not descriptive. It would be better to use descriptive variable names like elieResponse, joelResponse, and mattResponse.
