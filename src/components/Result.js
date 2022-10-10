import React from "react";
import { Link } from "react-router-dom";
import "../css/result.css";

const Result = () => {
  return (
    <>
      <div className="result">
        <h1>Congrats {JSON.parse(localStorage.getItem("Name"))}</h1>
        <p>You've done a great job gal</p>
        <h2>Woohooo! you got a score of {JSON.parse(localStorage.getItem("Score"))} points.</h2>
        <Link className="reset" to={"/"}>
          Reset
        </Link>
        <Link className="reset" to={"/Questions"}>
          Recheck
        </Link>
      </div>
    </>
  );
};

export default Result;
