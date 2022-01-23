import React from "react";
import { Link } from "react-router-dom";
import "../css/result.css";

const Result = () => {
  return (
    <>
      <div className="result">
        <h1>Nice Work {JSON.parse(localStorage.getItem("Name"))}</h1>
        <h2>you scored {JSON.parse(localStorage.getItem("Score"))} points.</h2>
        <Link className="reset" to={"/"}>
          Reset
        </Link>
        <Link className="reset" to={"/Questions"}>
          Review
        </Link>
      </div>
    </>
  );
};

export default Result;
