import { Fragment } from "react";
import headerShowImage from "../../image/shoes1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Funky Shoes</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerShowImage} alt="..." />
      </div>
    </Fragment>
  );
};

export default Header;
