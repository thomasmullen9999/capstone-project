import { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your reservation for ${formData.guests} guests on ${formData.date} at ${formData.time} is confirmed.`
    );
    // Here you can add further logic, e.g., sending data to backend or API
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 1,
    });
  };

  return (
    <section className="booking-page">
      <h2>Make a Reservation</h2>
      <form
        onSubmit={handleSubmit}
        className="booking-form"
        style={{ maxWidth: "400px" }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            min="1"
            max="20"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Reserve Table
        </button>
      </form>
    </section>
  );
};

export default BookingPage;
