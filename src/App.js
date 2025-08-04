import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Chicago from "./components/Chicago"; // About page replaced by Chicago
import BookingPage from "./components/BookingPage"; // Reservations page
import ConfirmedBooking from "./components/ConfirmedBooking";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<Chicago />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          {/* Add other routes for Menu, Order, Login if you have components */}
          {/* Example placeholders: */}
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/order" element={<OrderOnline />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
