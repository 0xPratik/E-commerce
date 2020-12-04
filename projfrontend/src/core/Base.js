import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "text-dark p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid shadow">
      <div className="jumbotron mycolor text-center">
        <h2 className="display-4 font-weight-bolder">{title}</h2>
        <p className="lead font-weight-bold">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="row">
      <div className="col-4 offset-1">
        <h4 className="mt-3 lead">
          <span className="projectby font-weight-bold">
            Project Created By Pratik Saria and Mir Omid
          </span>
        </h4>
      </div>
      <div className="col-6 offset-1">
        <h3 className="text-dark mt-3">
          Department of{" "}
          <span className="it font-weight-bolder">Information Technology</span>
        </h3>
      </div>
    </footer>
  </div>
);

export default Base;
