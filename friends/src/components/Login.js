import React, { useState } from "react";
import { Input, Button } from '@material-ui/core';
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const [person, setPerson] = useState({username: '', password: ''})

  const handleChange = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
    console.log(person)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', person)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
        console.log(res);
      })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='username'
          value={person.username}
          onChange={handleChange}
          placeholder="username"
        />
        <Input
          type="password"
          name='password'
          value={person.password}
          onChange={handleChange}
          placeholder="password"
        />
        <Button>Log In</Button>
      </form>
    </div>

)}


export default Login;