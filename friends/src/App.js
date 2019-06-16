import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { EntryForm, FriendList } from './components';

const AppContainer = styled.div``;

const blankInput = {
  name: '',
  age: 0,
  email: '',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendList: [],
      currentInput: blankInput,
      update: false,
      updateID: null,
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        this.setState({ friendList: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ currentInput: blankInput });
  }
  handleInput = (event) => {
    this.setState({
      currentInput: {
        ...this.state.currentInput,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleUpdateRequest = (data) => {
    this.setState({
      currentInput: {
        name: [data.name],
        age: [data.age],
        email: [data.email],
      },
      update: true,
      updateID: data.id,
    });
  };
  handleSubmit = () => {
    if (this.state.update) {
      axios
        .put(`http://localhost:5000/friends/${this.state.updateID}`, this.state.currentInput)
        .then((response) => {
          this.setState({
            friendList: response.data,
            currentInput: blankInput,
            update: false,
            updateID: null,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post('http://localhost:5000/friends', this.state.currentInput)
        .then((response) => {
          this.setState({
            friendList: response.data,
            currentInput: blankInput,
            update: false,
            updateID: null,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  handleDelete = () => {
    axios
      .delete(`http://localhost:5000/friends/${this.state.updateID}`)
      .then((response) => {
        this.setState({
          friendList: response.data,
          currentInput: blankInput,
          update: false,
          updateID: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <AppContainer>
        <EntryForm currentInput={this.state.currentInput} update={this.state.update} handleInput={this.handleInput} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete} />
        <FriendList data={this.state.friendList} handleUpdateRequest={this.handleUpdateRequest} />
      </AppContainer>
    );
  }
}

export default App;
