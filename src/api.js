// src/api.js

export const fetchAPI = (date) => {
  // Simulate returning different times based on the date
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const submitAPI = (formData) => {
  console.log("Submitted reservation:", formData);
  return true;
};
