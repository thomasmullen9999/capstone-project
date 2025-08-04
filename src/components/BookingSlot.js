// BookingSlot.jsx
import React from "react";

const BookingSlot = ({ time }) => {
  return (
    <li
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
  );
};

export default BookingSlot;
