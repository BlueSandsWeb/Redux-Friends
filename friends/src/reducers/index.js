// import actions from actions folder
import { FETCHING_FRIENDS_LIST, FETCHING_FRIENDS_LIST_SUCCESS, FETCHING_FRIENDS_LIST_FAILURE } from "../actions";

// create initial state for app
const initialState = {
  loggingIn: false,
  friends: [],
  fetchingFriends: false,
  savingFriends: false,
  updatingFriend: false,
  deletingFriend: false,
  error: null,
}

// Switch between desired states for the app based on actions passed in from actions folder
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS_LIST:
      return {
        ...state,
        fetchingFriends: true,
      }
    case FETCHING_FRIENDS_LIST_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload,
      }
      case FETCHING_FRIENDS_LIST_FAILURE:
        return {
          ...state,
          fetchingFriends: false,
          error: action.payload,
        } 
    default:
      return state;
  }
}

export default friendsReducer;