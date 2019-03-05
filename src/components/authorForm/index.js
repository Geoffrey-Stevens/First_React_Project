import React, { Component } from 'react';
import './index.css';

class AuthorForm extends Component {
  render() {
    // this  is js
    //console.log(this.props);
    return (
      //this is js
      <form onSubmit={this.props.changeName}>
      {/*this is jsx*/}
        <label>Change Author:</label>
        <input type="text" name="name" />
        <input type="submit" value="change" />
      </form>
    );
  }
}

export default AuthorForm;
