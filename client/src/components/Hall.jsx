import Comment from "./Comment"
import {Link} from 'react-router-dom'


function Hall({people}) {



  return (
    <div>
      <h1>Hall of Fame</h1>
      {people.map((each) => (
        <div className="personDiv" key={each._id} >
          <Link to={`${each._id}`}>
          <h3 id="personDivText">{each.name}</h3>
          <img src={each.img}></img>        
          </Link>
        </div>
      ))}
      <Comment />
    </div>
  )
}

export default Hall
