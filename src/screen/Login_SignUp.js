import React, { useState } from "react";
import { useNavigate}  from "react-router-dom";
import "./Login.css";
export default function Login_SignUp() {
  const [credentials, setCredentials] = useState({
    name:"",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        alert("enter valid credentials");
      }
      if (json.success) {
        localStorage.setItem("userName", credentials.name);
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert("enter valid credentials");
    }
  };

  const Change = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };


  const [credentials1, setCredentials1] = useState({
    name: "",
    email: "",
    password: "",
    geoLocation: "",
  });
  let navigate1 = useNavigate();
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials1.name,
          email: credentials1.email,
          password: credentials1.password,
          location: credentials1.geoLocation,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        // localStorage.setItem("username",credentials.name)
        localStorage.setItem("authToken", json.authToken);
        alert("enter valid credentials");
      }
      if (json.success) {
        navigate1("/");
      }
    } catch (err) {
      console.log(err);
      alert("enter valid credentials");
    }
  };

  const Change1 = (event) => {
    setCredentials1({ ...credentials1, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div class="back">
        <div class="container_login">
          <input type="checkbox" id="flip" />
          <div class="cover">
            <div class="front">
              <img
                src="https://images.pexels.com/photos/3045729/pexels-photo-3045729.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div class="text">
                <span class="text-1">
                  Every new friend is a <br /> new adventure
                </span>
                <span class="text-2">Let's get connected</span>
              </div>
            </div>
            <div class="back">
              <img
                src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div class="text">
                <span class="text-1">
                  Complete miles of journey <br /> with one step
                </span>
                <span class="text-2">Let's get started</span>
              </div>
            </div>
          </div>

          {/* LOGIN PAGE */}

          <div class="forms">
            <div class="form-content">
              <div class="login-form">
                <div class="title">Login</div>
                <form onSubmit={handleSubmit}>
                  <div class="input-boxes">
                    <div class="input-box">
                      <i class="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        name="name"
                        value={credentials.name}
                        onChange={Change}
                      />
                    </div>
                    <div class="input-box">
                      <i class="fas fa-envelope"></i>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        name="email"
                        value={credentials.email}
                        onChange={Change}
                      />
                    </div>
                    <div class="input-box">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        name="password"
                        value={credentials.password}
                        onChange={Change}
                      />
                    </div>
                    <div class="text">
                      <a href="#">Forgot password?</a>
                    </div>
                    <div class="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div class="text sign-up-text">
                      Don't have an account?
                      <label for="flip">Sigup now</label>
                    </div>
                  </div>
                </form>
              </div>

              {/* SIGNUP  */}

              <div class="signup-form">
                <div class="title">Signup</div>
                <form onSubmit={handleSubmit1}>
                  <div class="input-boxes">
                    <div class="input-box">
                      <i class="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        name="name"
                        value={credentials1.name}
                        onChange={Change1}
                      />
                    </div>
                    <div class="input-box">
                      <i class="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                        name="email"
                        value={credentials1.email}
                        onChange={Change1}
                      />
                    </div>
                    <div class="input-box">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        name="password"
                        value={credentials1.password}
                        onChange={Change1}
                      />
                    </div>
                    <div class="input-box">
                      <i class="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your address"
                        required
                        name="geoLocation"
                        value={credentials1.geoLocation}
                        onChange={Change1}
                      />
                    </div>
                    <div class="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div class="text sign-up-text">
                      Already have an account?{" "}
                      <label for="flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
