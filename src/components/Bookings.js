// Bookings.jsx
import React from "react";
import BookingPage from "./BookingPage";

const Bookings = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <section>
      <BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} // ✅ pass it down
      />
    </section>
  );
};

export default Bookings;
