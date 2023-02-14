import { useEffect, useState } from 'react'
import Login from './Login'
import Logout from './Logout'
import CommentComp from './CommentComp'
import axios from 'axios'


const Comment = () => {

  const [commentsArray, setCommentsArray] = useState([])

  const getComments = async () => {
    try {
      let response = await axios.get('http://localhost:3001/comments/get')
      setCommentsArray(response.data.coms)
    } catch (error) {
      console.log(error)
    }
  }




  const [user, setUser] = useState(false)
  const [userName, setName] = useState('')

  const commentState = {
    username: ``,
    comment: "",
  }

  const [comment, newComment] = useState(commentState)

  const login = () => setUser(true)
  const logout = () => setUser(false)

  const userChange = (e) => {
     newComment(
    {
      username: `${e.target.value}`,
      comment: "",
    }
  )
  setName(e.target.value)
  }




  const handleChange = (e) => {
    newComment({ ...comment, [e.target.id]: e.target.value })
  }

  const commentSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/comments/create', comment)
    newComment(
      {
        username: `${userName}`,
        comment: "",
      }
    )
  }

  useEffect(() => {
    getComments()
    
  }, [commentSubmit])


  let comments
  if (user) {
    comments = <Logout onClick={logout} />
    return (
      <div>
        <h2>Welcome {userName}</h2>
        {comments}
        <p>Who do you think we  should we add to the Hall of Fame, and why?</p>
        <form onSubmit={commentSubmit}>
          <textarea
            id="comment"
            cols="40"
            rows="5"
            onChange={handleChange}
          >
          </textarea><button type="submit" >submit</button>
        </form>


        {commentsArray.map((com)=>(
        <CommentComp  key={com._id} id={com._id} username={com.username} comment={com.comment} currentUser={userName}/>
        ))}
      </div>
    )
  } else {
    comments = <Login onClick={login} />
    return (
      <div>
        <p>Log in and leave a suggestion</p>

        <br></br>
        <p>Username:</p>
        <input onChange={userChange}></input>
        <p>Password:</p>
        <input type="password"></input>
        {comments}

      </div>
    )
  }


}

export default Comment
