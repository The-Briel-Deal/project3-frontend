import { Route } from "react-router-dom";
import { auth } from "./components/services/firebase";
import { useState, useEffect } from "react";
import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Create from "./components/Layout/Create";
import "./App.css";

const App = () => {
  const URL = "https://pipiopiproj.herokuapp.com/items/";

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  });

  // Copied over from Main.js
  const [items, setItems] = useState();
  const getShoes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setItems(data);
  };

  return (
    <Fragment>
      <Header user={user} getShoes={getShoes} />
      <Route exact path="/">
        <div className="main-container">
          <Main
            user={user}
            URL={URL}
            className="container"
            getShoes={getShoes}
            items={items}
          />
        </div>
      </Route>
      <Route exact path="/create">
        <Create getShoes={getShoes} />
      </Route>
    </Fragment>
  );
};

export default App;
