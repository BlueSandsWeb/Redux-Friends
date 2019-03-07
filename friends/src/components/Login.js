import React from 'react';
import { connect } from 'react-redux';

import {logIn} from '../actions'; 


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        user: '',
        pass: '',
      }
    }
  }

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      }
    })
  }

  login = e => {
    e.preventDefault();
    console.log(this.props);
    // this.props.login(this.state.credentials).then(() => {
    this.props.history.push('/')
    // })
  }

  render() {
    return(
      <div className="login-form">
        <h3>Login</h3>
        <form onSubmit={this.login}>
          <input onChange={this.changeHandler} type="text" value={this.state.credentials.user} name="user" placeholder="Username" />
          <input onChange={this.changeHandler} type="text" value={this.state.credentials.pass} name="pass" placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
    // characters: state.charsReducer.characters,
    // error: state.charsReducer.error,
    // fetching: state.charsReducer.fetching,
  }
}

export default connect( mapStateToProps, { logIn })(Login);