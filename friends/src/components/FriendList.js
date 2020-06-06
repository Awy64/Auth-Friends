import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const FriendList = ({friends, setFriends},) => {
  // const [friends, setFriends] = useState([])
  console.log(friends)
  
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("friends data", res)
        setFriends(res.data)
      })
  }, [])

  return(
  <>
  {friends.map(e => {
    return(<div key={e.id}>
      <h3>{e.name}</h3>
      <h4>{e.age}</h4>
      <h4>{e.email}</h4>
    </div>)
    
  })}
  </>)
}

export default FriendList;