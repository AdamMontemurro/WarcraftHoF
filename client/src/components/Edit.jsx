import { useState } from "react"
import axios from "axios"

const Edit = (props) => {

  const handleEdit = async (e) => {
    e.preventDefault()
    await axios.put(`/comments/${props.id}`, editedComment)
    setEditedComment(
      {
        username: `${currentUser}`,
        comment: "",
      })
      {props.unmountEdit()}
  }


  const initialState =
  {
    username: `${props.username}`,
    comment: "",
  }

  const [editedComment, setEditedComment] = useState(initialState)
  const [currentUser, setCurrentUser] = useState(props.username)

  const handleChange = (e) => {
    setEditedComment({ ...editedComment, [e.target.id]: e.target.value })
  }

  return (
    <form onSubmit={handleEdit}>
      <textarea
        id="comment"
        cols="30"
        rows="3"
        onChange={handleChange}>
      </textarea><br></br>
      <button>Confirm Edit</button>
    </form>
  )
}

export default Edit
