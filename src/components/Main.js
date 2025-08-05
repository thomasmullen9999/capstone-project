
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom"; 
import CustomersSay from "./CustomersSay";
import Bookings from "../components/Bookings";
import { fetchAPI, submitAPI } from "../api"; 

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_DATE") {
    const selectedDate = new Date(action.payload);
    return fetchAPI(selectedDate);
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate(); 

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed"); 
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <main className="main-content">
      <h1>Main</h1>
      <Bookings
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
      <CustomersSay />
    </main>
  );
};

export default Main;
