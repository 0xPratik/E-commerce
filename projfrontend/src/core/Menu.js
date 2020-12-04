import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#F4978E" };
  } else {
    return { color: "#F8AD9D" };
  }
};

const Menu = ({ history }) => (
  <div className="menu">
    <ul className="nav nav-tabs">
      <li className="nav-item p-2">
        <Link
          style={currentTab(history, "/")}
          className="nav-link font-weight-bold text-uppercase"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item p-2">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link font-weight-bold text-uppercase"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className="nav-item p-2">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link font-weight-bold text-uppercase"
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item p-2">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link font-weight-bold text-uppercase"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>
      )}
      {!isAutheticated() && (
        <Fragment>
          <li className="nav-item p-2">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link font-weight-bold text-uppercase"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link font-weight-bold text-uppercase"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="nav-item p-2">
          <span
            className="nav-link text-warning font-weight-bold text-uppercase"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
