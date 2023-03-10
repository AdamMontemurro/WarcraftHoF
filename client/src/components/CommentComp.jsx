import axios from "axios"
import { useState } from "react"
import Edit from "./Edit"




const CommentComp = (props) => {

  const [edit, setEdit] = useState(false)


  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`/comments/${props.id}`)
  }



  const editComment =()=> {
    setEdit(true)
  }
  const unmountEdit =()=> {
    setEdit(false)
  }
  


  if ( props.username === props.currentUser ) {
    return (
      <div id="commentDiv" key={props.id}>
        <h3 id="user">User: {props.username}</h3>
        <p>{props.comment}</p>
        <button onClick={editComment}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        {edit ?
        <Edit username={props.username} id={props.id} unmountEdit={unmountEdit}/> : null
        }
      </div>
    )
  } else {
    return (
      <div id="commentDiv" key={props.id}>
        <h3 id="user">User: {props.username}</h3>
        <p>{props.comment}</p>
      </div>
    )
  }
}

export default CommentComp
