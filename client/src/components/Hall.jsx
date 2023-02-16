import Comment from "./Comment"
import { Link } from 'react-router-dom'


function Hall({ people }) {



  return (
    <div>
      <h1>Hall of Fame</h1>
      <div className="peopleContainer">
        {people.map((each) => (
          <div className="personDiv" key={each._id} >
            <Link to={`${each._id}`}>
              <h3 id="personDivText">{each.name}</h3>
              <img className="personImg" src={each.img}></img>
            </Link>
          </div>
        ))}
      </div>
      <h1> Who should we add next?</h1>
      <div id="commentSection">
      <Comment />
      </div>
      <div id="space"></div>
    </div>
  )
}

export default Hall
