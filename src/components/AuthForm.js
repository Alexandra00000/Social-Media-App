import classes from "./AuthForm.module.scss";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthForm = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  

  const navigate = useNavigate();

  const usernameInputRef = useRef()
  const passwordInputRef = useRef()

  const toggleAuthState = () => {
    setIsLogIn((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const usernameValue = usernameInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;


    setIsLoading(true);
    if (isLogIn) {
      axios
      .post("/login", {
        username: usernameValue,
        password: passwordValue,
      })
      .then(function (response) {
        setIsLoading(false);
        navigate("/");
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
        usernameInputRef.current.value = '';
        passwordInputRef.current.value = '';
      });

    } else {
      axios
      .post("/signup", {
        username: usernameValue,
        password: passwordValue,
      })
      .then(function (response) {
        setIsLoading(false);
        navigate("/");
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
        usernameInputRef.current.value = '';
        passwordInputRef.current.value = '';
      });
    }

   
    // setTimeout(() => {
    //   setIsLoading(false);
    //   navigate("/");
    // }, 1000);
  };

  const actionIsLoading = <p>Sending request...</p>;
  const actionIsNotLoading = (
    <button>{isLogIn ? "Log In" : "Create new Account"}</button>
  );

  return (
    <section className={classes.auth}>
      <h1>{isLogIn ? "Log In" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="enter your email"
            id="email"
            ref={usernameInputRef}
            required
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            id="password"
            ref={passwordInputRef}
            required
          ></input>
        </div>

        <div className={classes.actions}>
          {!isLoading && actionIsNotLoading}
          {isLoading && actionIsLoading}
          {isError && <p>Please try again</p>}
          <button className={classes.toggle} onClick={toggleAuthState}>
            {isLogIn ? "Create new Account" : "Log In with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
