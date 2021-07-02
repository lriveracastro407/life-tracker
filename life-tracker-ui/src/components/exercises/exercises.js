//page for all of the exercises
//use list exercises
//have a button to add more
import ExerciseCard from "../exerciseCard/exerciseCard";
import { Link } from "react-router-dom";
import "./exercises.css";
import NotAllowed from "../notAllowed/notAllowed";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";

export default function Exercise({ user, exerciselist }) {
  if (!user) {
    return <NotAllowed />;
  }

  console.log(exerciselist);
  return (
    <div className="Exercise">
      <div className="exercise">
        <div className="subheader">
          <h2>Overview</h2>
          <button className="button outline small outline gold">
            <Link to="/exercise/create">Create New Exercise</Link>
          </button>
        </div>
      </div>
      <div className="feed">
        {exerciselist?.map((exercise) => (
          <ExerciseCard exercise={exercise} key={exercise.id} user={user} />
        ))}
      </div>
    </div>
  );
}
