import axios from "axios"





const CommentComp = (props) => {

  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3001/comments/${props.id}`)
  }




  if (props.username === props.currentUser) {
    return (
      <div key={props.id}>
        <h3>User: {props.username}</h3>
        <p>{props.comment}</p>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>

      </div>
    )
  } else {
    return (
      <div key={props.id}>
        <h3>User: {props.username}</h3>
        <p>{props.comment}</p>
      </div>
    )
  }
}

export default CommentComp
