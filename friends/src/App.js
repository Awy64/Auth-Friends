import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Login from "./components/Login"
import FriendList from "./components/FriendList"
import PrivateRoute from './components/PrivateRoute'
import NewStudent from './components/NewStudent'

function App() {
  const [friends, setFriends] = useState([])
  return (
    <Router>
      <div className="App">
        <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
            <li>
              <Link to="/protectedAdd">Add User</Link>
            </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protectedAdd" friends={friends} setFriends={setFriends} component={NewStudent} /> 
          <PrivateRoute exact path="/protected" friends={friends} setFriends={setFriends} component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
