import { Fragment } from "react";
import { login, logout } from "../services/firebase";
import headerShowImage from "../../image/shoes1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  let isAdmin = false;

  const isAdminFn = () => {
    if (props.user.email === "danewjkim@gmail.com") {
      return <li>Create</li>;
    }
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Funky Shoes</h1>
        <div className={classes.combined}>
          <ul>
            {props.user ? isAdminFn() : null}
            {/* {isAdmin ? <li>Create</li> : null} */}
            {props.user ? (
              <li onClick={logout}>Logout</li>
            ) : (
              <li onClick={login}>Login</li>
            )}
          </ul>
          <HeaderCartButton />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={headerShowImage} alt="..." />
      </div>
    </Fragment>
  );
};

export default Header;
