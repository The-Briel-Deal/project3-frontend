// import BuyButton from "./Button";
import Button from "@mui/material/Button";
import MediaCard from "./Card";
import { useEffect, useState } from "react";
import "./Main.css";

const Main = (props) => {
  useEffect(() => {
    props.getShoes();
  }, []);

  // added key ={item._id}
  const loaded = () => {
    return props.items.map((item) => (
      <div className="main-item" key={item._id}>
        <MediaCard
          item={item}
          getShoes={props.getShoes}
          user={props.user}
          key={item._id}
          name={item.name}
          description={item.description}
          price={item.price}
          id={item._id}
        />
      </div>
    ));
  };

  const loading = () => {
    return <h1>loading...</h1>;
  };

  return props.items ? loaded() : loading();
};

export default Main;
