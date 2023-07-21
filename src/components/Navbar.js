import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Cart from "../screen/Cart";
import Modal from "../Modal";
import { useCart } from "./ContextReducer";
export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
}

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light text-light position-relative"
      style={{ "background-color": "#ff7a00" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/">
          <em>
            <b>ɢʀǟɮʄօօɖ</b>
          </em>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className=" navbar-nav me-auto mb-1">
            <li className="nav-item mx-3 fs-7 ">
              <Link
                className="nav-Link text-decoration-none text-light fs-5 active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-3 fs-7">
              <Link
                className="nav-Link text-decoration-none text-light fs-5"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="nav-Link text-decoration-none text-light fs-5 fw-bold"
                // style={{ color: "white" }}
                to="/offers"
              >
                Offer$
                {/* <p className="d-inline">&#127881;</p> */}
              </Link>
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item mx-3 fs-7">
                <Link
                  className="nav-Link text-decoration-none text-light fs-5"
                  to="/myOrderData"
                >
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>

          {!localStorage.getItem("authToken") ? (
            <div>
              <div className="d-flex ">
                <Link
                  className="nav-Link text-decoration-none text-light fs-5 mx-3"
                  to="/login"
                >
                  Login/Sign Up
                </Link>
              </div>
            </div>
          ) : (
            <div className="d-flex ">
              {/* <div> </div> */}
              <div className="d-flex text-dark fw-bold mx-4 fs-5 mt-2">
                Hello,{" "}
                <p className="text-light mx-1">
                  {localStorage.getItem("userName")}
                </p>
              </div>
              <Link>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png"
                  alt="ERROR 404"
                  style={{ height: "40px", width: "40px" }}
                  className=""
                  onClick={() => {
                    setCartView(true);
                  }}
                />
                {data.length ? (
                  <span className="badge bg-danger">{data.length}</span>
                ) : (
                  ""
                )}

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}
              </Link>
              <div
                className="btn text-decoration-none fs-5 mx-3 fw-bold"
                style={{ color: "black" }}
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
