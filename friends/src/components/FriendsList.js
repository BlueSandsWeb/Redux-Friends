import React from 'react';
import { connect } from 'react-redux';

import { getFriendsList } from '../actions';

class FriendsList extends React.Component {

  componentDidMount() {
    this.props.getFriendsList();
  }

  render() {
    return (
      <div className="friends-list-container">
        {this.props.friends.map(friend => {
          return <p>{friend.name}</p>
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    deletingFriend: state.deletingFriend,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getFriendsList })(FriendsList);