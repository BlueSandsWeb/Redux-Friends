import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_IN_SUCCESS = 'LOGGING_IN_SUCCESS';
export const LOGGING_IN_FAILURE = 'LOGGING_IN_FAILURE';

export const logIn = credentials => dispatch => {
  dispatch({ type: LOGGING_IN});
  return axios.post('http://localhost:5000/api/login', credentials).then( res => {
    console.log(res);
    // localStorage.setItem('token', res.data.payload);
  })
}

export const FETCHING_FRIENDS_LIST = 'FETCHING_FRIENDS_LIST';
export const FETCHING_FRIENDS_LIST_SUCCESS = 'FETCHING_FRIENDS_LIST_SUCCESS';
export const FETCHING_FRIENDS_LIST_FAILURE = 'FETCHING_FRIENDS_LIST_FAILURE';

export const getFriendsList = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS_LIST });
  axios.get('http://localhost:5000/api/friends', { authorization: 'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ'})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
}