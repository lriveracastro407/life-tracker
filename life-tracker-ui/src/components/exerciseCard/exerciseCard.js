import { Link } from "react-router-dom";

import "./exerciseCard.css";
export default function ExerciseCard({ exercise, user }) {
  // const userOwnsPost = user?.username && exercise?.username === user?.username
  return (
    <div className="Post">
      <div className="ExerciseCard">
        <div className="header">
          <p className="name">{exercise.name}</p>
        </div>
        <div className="stats">
          <div className="stat">
            <p>Duration</p>
            <span>{exercise.duration}</span>
          </div>
          <div className="stat">
            <p>Intensity</p>
            <span>{exercise.intensity}</span>
          </div>
        </div>
        <div className="meta">
          <p className="category">{exercise.category}</p>
        </div>
        {/* <span className="user">
            {userOwnsPost ? "You" : `@${exercise.username}`}
            {userOwnsPost ? (
              <Link to={`/exercise`}>
                <i className="material-icons">edit</i>
              </Link>
            ) : null}
          </span> */}
      </div>
    </div>
  );
}
