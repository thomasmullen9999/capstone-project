import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Chicago from "./components/Chicago";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

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
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
