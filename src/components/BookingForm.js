// BookingForm.jsx
import React, { useState } from "react";

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setResDate(selectedDate);
    dispatch({ type: "UPDATE_DATE", payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      resDate,
      resTime,
      guests,
      occasion,
    };

    submitForm(formData); // ✅ call the function from props
  };

  return (
    <>
      <h2>Book Now</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          maxWidth: "300px",
          gap: "15px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#f7f7f7",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
        >
          {Array.isArray(availableTimes) &&
            availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        />
      </form>
    </>
  );
};

export default BookingForm;
