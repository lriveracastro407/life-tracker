import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import axios from "axios"
import apiClient from "../../services/apiClient";
import Navbar from "../navbar/navbar";
import Home from "../home/Home";
import Signup from "../signup/signup";
import Login from "../login/login";
import ExerciseForm from "../exerciseForm/exerciseForm";
import Exercise from "../exercises/exercises";
import Activity from "../activity/activity";
import Nutrition from "../food/food";
import Sleep from "../sleep/sleep";
//import ExerciseList from "../exercises/exercises";
//import PostDetail from "../PostDetail/PostDetail";
//import NotFound from "../NotFound/NotFound";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [exerciselist, setexerciselist] = useState([]);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      setIsFetching(true);
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) {
        setUser(data.user);
      }
      if (error) {
        setError(error);
      }
    };

    const token = localStorage.getItem("lifetracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
    setIsFetching(false);
    // const fetchExercises = async () => {
    //   setIsFetching(true);

    //   const { data, error } = await apiClient.exerciseList();
    //   console.log(data);
    //   if (data) {
    //     setexerciselist(data.listExercises);
    //   }
    //   if (error) {
    //     setError(error);
    //   }
    //   setIsFetching(false);
    // };
    // const fetchSummary = async () => {
    //   setIsFetching(true);

    //   const { data, error } = await apiClient.activity();
    //   console.log(data);
    //   if (data) {
    //     setSummary(data);
    //   }
    //   if (error) {
    //     setError(error);
    //   }
    //   setIsFetching(false);
    // };

    // fetchExercises();
    // fetchSummary();
  }, []);

  useEffect(() => {
    const fetchExercises = async () => {
      setIsFetching(true);

      const { data, error } = await apiClient.exerciseList();
      console.log(data);
      if (data) {
        setexerciselist(data.listExercises);
      }
      if (error) {
        setError(error);
      }
      setIsFetching(false);
    };
    const fetchSummary = async () => {
      setIsFetching(true);

      const { data, error } = await apiClient.activity();
      console.log(data);
      if (data) {
        setSummary(data);
      }
      if (error) {
        setError(error);
      }
      setIsFetching(false);
    };

    fetchExercises();
    fetchSummary();
  }, []);

  // useEffect(() => {
  //   const fetchSummary = async () => {
  //     const { data, error } = await apiClient.activity();
  //     console.log(data);
  //     if (data) {
  //       setSummary(data);
  //     }
  //     if (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchSummary();
  // }, []);

  const addExercise = (newExercise) => {
    setexerciselist((oldExercise) => [newExercise, ...oldExercise]);
  };

  const handleLogout = async () => {
    await apiClient.logoutUser();
    setUser(null);
    setError(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                error={error}
                exerciselist={exerciselist}
                addExercise={addExercise}
              />
            }
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Signup user={user} setUser={setUser} />}
          />
          <Route
            path="/exercise"
            element={
              <Exercise
                user={user}
                setUser={setUser}
                exerciselist={exerciselist}
              />
            }
          />
          <Route
            path="/exercise/create"
            element={
              <ExerciseForm
                user={user}
                exerciselist={exerciselist}
                addExercise={addExercise}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/activity"
            element={
              <Activity user={user} setUser={setUser} summary={summary} />
            }
          />
          <Route
            path="/nutrition"
            element={<Nutrition user={user} setUser={setUser} />}
          />
          <Route
            path="/sleep"
            element={<Sleep user={user} setUser={setUser} />}
          />
          {/* <Route
            path="*"
            element={<NotFound user={user} setUser={setUser} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
