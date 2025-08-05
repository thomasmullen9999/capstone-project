
import React from "react";
import BookingPage from "./BookingPage";

const Bookings = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <section>
      <BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} 
      />
    </section>
  );
};

export default Bookings;
