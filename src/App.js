import { Route } from "react-router-dom";
import { auth } from "./components/services/firebase";
import React, { useState, useEffect, Fragment } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Create from "./components/Layout/Create";
import Cart from "./components/Cart/Cart";
import "./App.css";

const App = () => {
  const URL = "https://pipiopiproj.herokuapp.com/items/";

  // Modal States
  const [cartVisible, setCartVisible] = useState(false);
  // Cart handler reveal fn
  const revealCartHandler = () => {
    setCartVisible(true);
  };
  // Cart handler hide fn
  const hideCartHandler = () => {
    setCartVisible(false);
  };

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
      {cartVisible && <Cart onClose={hideCartHandler} />}
      <Header user={user} getShoes={getShoes} showCart={revealCartHandler} />
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
