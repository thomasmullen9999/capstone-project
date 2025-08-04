import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Nav />

        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
