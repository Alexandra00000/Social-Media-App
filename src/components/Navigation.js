import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleAuth = () => { 
    
    isLoggedIn ? navigate("/") : navigate("/auth")
    setIsLoggedIn(!isLoggedIn);
    
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Social Media App</div>
      </Link>
      <nav>
        <ul className={classes.menu}>
          <li className={classes.menuitem}>
            {isLoggedIn ? "" : <Link to="/">profile</Link>}
          </li>
          <li className={classes.menuitem}>
            {isLoggedIn ? "" : <Link to="/friends">friends</Link>}
          </li>
          <li className={classes.menuitem}>
            {isLoggedIn ? "" : <Link to="/chat">chat</Link>}
          </li>
          <li className={classes.menuitem}>
            <button onClick={toggleAuth}>
              {isLoggedIn ? "LogIn" : "LogOut"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
