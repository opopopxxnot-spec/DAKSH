import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [passwordType, setPasswordType] = useState("password");

  const switchView = () => setIsLoginView(!isLoginView);
  const showPassword = () => setPasswordType("text");
  const hidePassword = () => setPasswordType("password");

  return (
    <div className="App">

      {/* ================= SIGN IN ================= */}
      {isLoginView && (
        <div className="login-container">
          <h2>Sign In</h2>

          {/* EMAIL */}
          <div className="input-group">
            <div className="icon-box">
              <img src="/A.png" alt="email" />
            </div>
            <input type="email" placeholder="Enter Email ID" />
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <div className="icon-box">
              <img src="/C.png" alt="password" />
            </div>

            <input type={passwordType} placeholder="Enter Password" />

            <div
              className="icon-box eye-box"
              onMouseDown={showPassword}
              onMouseUp={hidePassword}
              onMouseLeave={hidePassword}
              onTouchStart={showPassword}
              onTouchEnd={hidePassword}
            >
              <img src="/B.png" alt="show password" />
            </div>
          </div>

          <p>
            Don't have an account?
            <span onClick={switchView}> Sign Up</span>
          </p>
        </div>
      )}

      {/* ================= SIGN UP ================= */}
      {!isLoginView && (
        <div className="signup-container">

          
          <img src="/D.png" alt="University Logo" className="university-logo" />

          <h2>Sign Up</h2>

          {/* PHONE */}
          <div className="input-group">
            <div className="icon-box">
              <img src="/F.png" alt="phone" />
            </div>
            <input type="tel" placeholder="Enter Phone Number" />
          </div>

          {/* EMAIL */}
          <div className="input-group">
            <div className="icon-box">
              <img src="/A.png" alt="email" />
            </div>
            <input type="email" placeholder="Enter Email ID" />
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <div className="icon-box">
              <img src="/C.png" alt="password" />
            </div>

            <input type={passwordType} placeholder="Create Password" />

            <div
              className="icon-box eye-box"
              onMouseDown={showPassword}
              onMouseUp={hidePassword}
              onMouseLeave={hidePassword}
              onTouchStart={showPassword}
              onTouchEnd={hidePassword}
            >
              <img src="/B.jpg" alt="show password" />
            </div>
          </div>

          <p>
            Already have an account?
            <span onClick={switchView}> Sign In</span>
          </p>
        </div>
      )}
    </div>
  );
}
