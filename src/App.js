import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import "./App.css";

const App = () => {
  const URL = "https://pipiopiproj.herokuapp.com/items/";

  return (
    <Fragment>
      <Header />
      <div className="main-container">
        <Main URL={URL} className="container" />
      </div>
    </Fragment>
  );
};

export default App;
