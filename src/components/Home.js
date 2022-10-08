import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import img4 from "../img/img 4.png";
import img2 from "../img/img 2.png";
import img1 from "../img/img1.png";

const Home = () => {
  const [name, updateName] = useState("");
  //eslint-disable-next-line
  const [questions, updateQuestions] = useState([
    {
      quesNo: 1,
      question: "How are you?"
        ,
      options: ["fine", "not fine", "ok", "done"],
      answer: 0,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: true,
    },
    {
      quesNo: 2,
      question: "Have you done any projects till now?",
      options: ["yes", "no", "thinking to do", "done"],
      answer: 0,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },
    {
      quesNo: 3,
      question: "what is basic pre-requisite for web development?",
      options: ["HTML", "Python", "flutter", "none"],
      answer: 0,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },
    {
      quesNo: 4,
      question: "next step in web development after Learning HTML",
      options: ["js", "css", "bootstrap", "none"],
      answer: 1,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },
    {
      quesNo: 5,
      question: "javascript is a ____type of language",
      options: ["scripting", "programming", "markup", "none"],
      answer: 0,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },

    {
      quesNo: 6,
      question: "ES in js stands for ?",
      options: ["e-script", "external-script", "ecma-script", "none"],
      answer: 2,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },
    {
      quesNo: 7,
      question: "js is used in_______development",
      options: ["front-end", "back-end", "android", "ios"],
      answer: 0,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },
    {
      quesNo: 8,
      question: "bootstrap is made by_______",
      options: ["facebook", "instagram", "google", "twitter"],
      answer: 3,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },
    {
      quesNo: 9,
      question: "H in HTML refers to ?",
      options: ["hemi", "hype", "hyper", "hosted"],
      answer: 2,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },
    {
      quesNo: 10,
      question: "have you leart something new from this quiz ?",
      options: ["yes", "no", "already-known", "prefer not to say"],
      answer: 0,
      skipped: false,
      flagged: false,
      attempted: false,
      visited: false,
    },
  ]);

  const setName = (e) => {
    updateName(e.target.value);
  };

  const handleSubmitQues = (e) => {
    localStorage.setItem("Questions", JSON.stringify(questions));
    localStorage.setItem("Name", JSON.stringify(name));
    localStorage.setItem("currentQues", JSON.stringify(1));
    localStorage.setItem("Score", JSON.stringify(0));
  };

  return (
    <>
      <div>
        <img alt="pic" className="leftImg" src={img1}></img>
        <img alt="pic" className="rightImg" src={img2}></img>
        <h1 className="title">Quiz.ly</h1>
        <div className="input">
          <input
            className="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e)}
            type="text"
          />
        </div>
        {name !== "" ? (
          <div className="submit">
            <Link
              className="start"
              onClick={(e) => handleSubmitQues(e)}
              to={"Questions"}
            >
              Start
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="submit">
          <Link className="start" to={"Questions"}>
            Resume
          </Link>
        </div>
      </div>
      <footer className="down">
        <img alt="pic" className="bottomImg" src={img4}></img>
      </footer>
    </>
  );
};

export default Home;
