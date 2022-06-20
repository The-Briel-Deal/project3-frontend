import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useState, useEffect } from "react";

const Cart = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const cartItems = () => {
    props.itemsArr.map((item) => {
      // setTotalAmount(totalAmount + item[0].price);
      console.log(item[0].name);
    });

    return <ul className={classes["cart-items"]}></ul>;
  };

  useEffect(() => {
    setTotalAmount(totalAmount);
  }, [props.itemsArr]);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
