import React from "react";
import { useState } from "react";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    const email_P = /\S+@\S+\.\S+/;
    if (!email_P.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (email === "mannu@example.com" && password === "12345") {
      const userData = { name: "Manisha Singh", email };
      dispatch(login(userData));
      navigate("/dashboard");
      return;
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div>
        <div
          className={
            isRightPanelActive ? "container right-panel-active" : "container"
          }>
          {/* <!-- Sign Up --> */}
          <div class="container__form container--signup">
            <form action="#" class="form" id="form1">
              <h2 class="form__title">Sign Up</h2>
              <input type="text" placeholder="User" class="input" />
              <input type="email" placeholder="Email" class="input" />
              <input type="password" placeholder="Password" class="input" />
              <button class="btn">Sign Up</button>
            </form>
          </div>
          {/* <!-- Sign In --> */}
          <div class="container__form container--signin">
            <form action="#" class="form" id="form2" onSubmit={handleLogin}>
              <h2 class="form__title">Sign In</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="current-password"
                onChange={(e) => setEmail(e.target.value)}
                id="emailInput"
                class="input"
              />
              <input
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                id="passwordInput"
                class="input"
              />
              <p style={{ color: "red" }}>{error}</p>
              <a href="#" class="link">
                Forgot your password?
              </a>
              <button class="btn">Sign In</button>
            </form>
          </div>
          {/* <!-- Overlay --> */}
          <div class="container__overlay right-panel-active">
            <div class="overlay">
              <div class="overlay__panel overlay--left">
                <button
                  class="btn"
                  id="signIn"
                  onClick={() => setIsRightPanelActive(false)}>
                  Sign In
                </button>
              </div>
              <div class="overlay__panel overlay--right">
                <button
                  class="btn"
                  id="signUp"
                  onClick={() => setIsRightPanelActive(true)}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Singh">
        <a
          class="Singh"
          href="https://github.com/Manisha1998-singh"
          target="_blank">
          Manisha Singh
        </a>
      </div>
    </>
  );
}

export default Login;
