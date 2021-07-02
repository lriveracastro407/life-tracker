//page for creating exercises
//inputs for each individual category
import { useEffect, useState } from "react";
// import axios from "axios"
import apiClient from "../../services/apiClient";
import NotAllowed from "../notAllowed/notAllowed";
import "./exerciseForm.css";

export default function ExerciseForm({ user, addExercise }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    duration: "",
    intensity: "",
    category: "",
  });

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await apiClient.createExercise({
      name: form.name,
      duration: form.duration,
      intensity: form.intensity,
      category: form.category,
    });
    if (data) {
      addExercise(data.exercise);
      setForm({ name: "", duration: "", intensity: "", category: "" });
    }
    if (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const renderForm = () => {
    if (!user?.email) {
      return <NotAllowed />;
    }
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name of Exercise"
            value={form.name}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            placeholder="How long did your workout last?"
            value={form.duration}
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="intensity">Intensity</label>
          <input
            type="number"
            name="intensity"
            placeholder="How intense was your workout?"
            value={form.intensity}
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            placeholder="What part of your body did you work out?"
            value={form.category}
            onChange={handleOnInputChange}
          />
        </div>

        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    );
  };

  return (
    <div className="Exercise">
      <div className="card">
        <h2>Add Exercise</h2>

        {Boolean(error) && <span className="error">{error}</span>}

        {renderForm()}
      </div>
    </div>
  );
}

//exercise container
//excerise card
