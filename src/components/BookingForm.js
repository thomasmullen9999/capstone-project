import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [formValid, setFormValid] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setResDate(selectedDate);
    dispatch({ type: "UPDATE_DATE", payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ resDate, resTime, guests, occasion });
  };

  useEffect(() => {
    const isValid =
      resDate && resTime && guests >= 1 && guests <= 10 && occasion;
    setFormValid(isValid);
  }, [resDate, resTime, guests, occasion]);

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
        aria-label="Booking Form"
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          min={today}
          required
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          required
          onChange={(e) => setResTime(e.target.value)}
        >
          <option value="">Select</option>
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
          required
          onChange={(e) => setGuests(Number(e.target.value))}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          required
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          aria-label="On Click"
          disabled={!formValid}
          style={{
            backgroundColor: formValid ? "#4CAF50" : "#ccc",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: formValid ? "pointer" : "not-allowed",
            borderRadius: "6px",
          }}
        />
      </form>
    </>
  );
};

export default BookingForm;
