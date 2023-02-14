import { useEffect, useState } from 'react'
import Login from './Login'
import Logout from './Logout'


const Comment = () => {


  const [user, setUser] = useState(false)
  const [userName, setName] = useState('')

  const login = () => setUser(true)
  const logout = () => setUser(false)
  const userChange = (e) => setName(e.target.value)
  const commentState = {
    name:`${userName}`,
    comment:"",
  }

  let comments
  if (user) {
    comments = <Logout onClick={logout} />
    return (
      <div>
        <h2>Welcome {userName}</h2>
        <p>Who should we add to the Hall of Fame?</p>
        <input></input>
        {comments}
      </div>
    )
  } else {
    comments = <Login onClick={login} />
    return (
      <div>
        <p>Enter your username to log in and leave a suggestion</p>
        <input onChange={userChange}></input>
        {comments}
      </div>
    )
  }


}

export default Comment
