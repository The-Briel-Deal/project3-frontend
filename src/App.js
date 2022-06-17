import { auth } from "./components/services/firebase";
import { useState, useEffect } from "react";
import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import "./App.css";

const App = () => {
  const URL = "https://pipiopiproj.herokuapp.com/items/";

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  });

  return (
    <Fragment>
      <Header user={user} />
      <div className="main-container">
        <Main URL={URL} className="container" />
      </div>
    </Fragment>
  );
};

export default App;
