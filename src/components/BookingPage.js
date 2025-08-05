
import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = ({ availableTimes = [], dispatch, submitForm }) => {
  return (
    <div>
      <h2>Reserve a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} 
      />

      <h3>Available Booking Slots</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {availableTimes.map((time) => (
          <li
            key={time}
            style={{
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#e8ffe8",
              borderRadius: "6px",
              fontWeight: "500",
            }}
          >
            ⏰ {time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingPage;
