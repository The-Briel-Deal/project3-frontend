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

  // creating a state for newItemsArr
  const [newItemsArr, setNewItemsArr] = useState([]);
  const [newCartAmount, setNewCartAmount] = useState(0);
  // Creating a state for the total amount
  const [itemsArr, setItemsArr] = useState(0);

  // function to check to see if the ID gets printed?

  const addToCartHandler = (e, id) => {
    const itemArr = items.filter((item) => item._id === id);
    setNewItemsArr((previousState) => [...previousState, itemArr]);
    // console.log(newItemsArr);
    console.log(id);
  };

  console.log(newItemsArr);

  // useEffect(() => addToCartHandler, []);

  return (
    <Fragment>
      {cartVisible && <Cart onClose={hideCartHandler} itemsArr={itemsArr} />}
      <Header
        user={user}
        getShoes={getShoes}
        showCart={revealCartHandler}
        itemsArr={newItemsArr.length}
      />
      <Route exact path="/">
        <div className="main-container">
          <Main
            user={user}
            URL={URL}
            className="container"
            getShoes={getShoes}
            items={items}
            addToCartFn={addToCartHandler}
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
