# Live Answers

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It allows users to answer a question and updates the list of answers in real time.

## Main technology used
- ReactJs
- TypeScript
- HTML 5 EventSource API
- Axios
- Material UI
- jest
## Prerequisites
- node
- yarn

### Setup the Project Locally
- clone the repository.
- `cd` to the root of the project.
- run `yarn` to install the dependencies.
- run `yarn start` to start the local server on port `3000`.

NB: You may need to change the server url to localhost incase of `cors` in both the AnswerForm and AnswerList components. `127.0.0.1:4001/api/v1/answers`
### Tests
- run `yarn test`

### Using the Web App.
- The home page contains a form to enter the answer to the question. Is a hotdog a Sandwich? Why?
- Some answer phrases are not allowed as discribed in the challenge.
- The second route is a list of answers returned in order of latest.
- The list of answers is updated in real time.

**Author**
- Emanuel Okello

## Live Demo: Currently not working because of unknown `cors` issues from heroku https://gifted-lewin-a86f2b.netlify.app/
