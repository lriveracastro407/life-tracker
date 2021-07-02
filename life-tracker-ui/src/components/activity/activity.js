import { Link } from "react-router-dom";
import "./activity.css";
import NotAllowed from "../notAllowed/notAllowed";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";

export default function Activity({ user, summary }) {
  if (!user) {
    return <NotAllowed />;
  }
  console.log(summary);
  return (
    <div className="activity">
      <div className="header">
        <h1>Activity Feed</h1>
      </div>
      <div className="Activity">
        <div className="activity-btns">
          <Link to="/exercise/create" className="exercise-btn">
            Add Exercise
          </Link>
          <Link to="" className="nutrition-btn">
            Add Nutrition
          </Link>
          <Link to="" className="sleep-btn">
            Add Sleep
          </Link>
        </div>
        <div className="aty-section">
          <div className="aty-card">
            <div className="aty-stats">
              <div>Total Exercise Time (minutes): </div>
              <div className="summary"> {summary.duration.sum} </div>
            </div>
          </div>
          <div className="aty-card">
            <div className="aty-stats">
              <div>Average Exercise Intensity:</div>
              <div className="summary"> {summary.intensity.avg} </div>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
}
