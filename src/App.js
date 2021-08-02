import React from 'react';
import axios from "axios";
import './App.css';
import UserForm from './components/UserForm';
import styled from "styled-components";

const fetchUserData = (name) => {
  return axios.get(`https://api.github.com/users/${name}`)
  .then(res => {console.log('SEE ME', res.data)})
  .catch(err => console.log(err))
}

const fetchFollowersData = (name) => {
  return axios.get(`https://api.github.com/users/${name}/followers`)
  .then(res => res.data)
  .catch(err => console.log(err))
}


class App extends React.Component {
  state ={
    currentUser: 'rickmansfield',
    formValues: '',
    followers: []
  }

  componentDidMount(){
    fetchUserData(this.state.currentUser)
    .then(res => {
      this.setState({
        user: "blah"
      })
    })
  }

  handleChange = event => {
    console.log('App event target:\n', event.target.value)
    this.setState({
      currentUser: event.target.value
    })
  }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     fetchUserData(this.state.user)
//         .then(res => {
//             this.setState({
//                 dogImages: res.data.message
//             })
//         })
//         .catch(err => console.log(err))
// }

  render() {
    return (
      <Wrapper>
      <div className="App" >
        <header className="App-header">
          <h1>GitHub User Card II</h1>
        </header>
      </div>
      <div>
        <UserForm onSubmit={this.handSubmit} onChange={this.handleChange}/>

      </div>
      </Wrapper>
    )

  }
}
export default App

const Wrapper = styled.div``;
