import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useState, useEffect } from "react";

const Cart = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  // const cartItems = props.itemsArr.map((item) => {
  //   setTotalAmount(totalAmount + item[0].price);
  //   console.log(item[0].name);
  // });
  useEffect(() => {
    let newTotal = 0
    for (const item of props.itemsArr) {
      newTotal += item[0].price;
    }
    setTotalAmount(newTotal);
  }, [props.itemsArr]);
  // return <ul className={classes["cart-items"]}></ul>;
  // useEffect(() => {
  //   setTotalAmount(totalAmount);
  // }, [props.itemsArr]);

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {/* {JSON.stringify(props.itemsArr)} */}
      {props.itemsArr.map((item) => {
        console.log(item[0]._id)
        return (
          <div className={classes.cartItem} key={item[0]._id}>
            {item[0].name}
          </div>
        );
      })}
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
