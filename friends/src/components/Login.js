import React, { useState } from "react";
import { Input, Button } from '@material-ui/core';

const Login = () => {
  const [person, setPerson] = useState({username: '', password: ''})

  const handleChange = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
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
        />
        <Input
          type="password"
          name='password'
          value={person.password}
          onChange={handleChange}
        />
        <Button>Log In</Button>
      </form>
    </div>

)}