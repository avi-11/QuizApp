import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/ques.css";

const Ques = ({
  questions,

  Flag,
  Skip,
  Visit,
  Attempt,
}) => {
  const [q, setQ] = useState([]);
  const [score, setScore] = useState(JSON.parse(localStorage.getItem("Score")));
  const [currentQ, setCQ] = useState(1);

  const handleClick = (p) => {
    Visit(p);
    setCQ(p);

    localStorage.setItem("currentQues", JSON.stringify(p));
  };

  useEffect(() => {
    const que = questions.filter((q) => q.quesNo === currentQ);
    setQ(que);

    setCQ(JSON.parse(localStorage.getItem("currentQues")));
    localStorage.setItem("Score", JSON.stringify(score));
    //eslint-disable-next-line
  }, [currentQ, questions]);

  return (
    <>
      {q.map((q) => (
        <div>
          <Link className="end" to={"/result"}>
            End Quiz
          </Link>
          <div className="QnA">
            <div className="Qpanel">
              <i
                onClick={(e) => {
                  Flag(q.quesNo);
                }}
                className={
                  q.flagged ? "fa fa-flag fa-2x flag" : "far fa-flag fa-2x flag"
                }
              ></i>
              <i
                onClick={(e) => {
                  Skip(q.quesNo);
                  handleClick(q.quesNo + 2);
                }}
                className="fa fa-forward fa-2x skip"
              ></i>
              <p className="question" key={q.quesNo}>
                {q.question}
              </p>
            </div>
            <div className="buttons">
              <button
                onClick={(e) => {
                  Attempt(q.quesNo);
                  q.answer === 0 ? setScore(score + 1) : setScore(score - 1);
                }}
                className={
                  q.attempted === true
                    ? q.answer === 0
                      ? "option disable green"
                      : "option disable wrong"
                    : "option"
                }
              >
                {q.options[0]}
              </button>
              <button
                onClick={(e) => {
                  Attempt(q.quesNo);
                  q.answer === 1 ? setScore(score + 1) : setScore(score - 1);
                }}
                className={
                  q.attempted === true
                    ? q.answer === 1
                      ? "option disable green"
                      : "option disable wrong"
                    : "option"
                }
              >
                {q.options[1]}
              </button>
              <button
                onClick={(e) => {
                  Attempt(q.quesNo);
                  q.answer === 2 ? setScore(score + 1) : setScore(score - 1);
                }}
                className={
                  q.attempted === true
                    ? q.answer === 2
                      ? "option disable green"
                      : "option disable wrong"
                    : "option"
                }
              >
                {q.options[2]}
              </button>
              <button
                onClick={(e) => {
                  Attempt(q.quesNo);
                  q.answer === 3 ? setScore(score + 1) : setScore(score - 1);
                }}
                className={
                  q.attempted === true
                    ? q.answer === 3
                      ? "option disable green"
                      : "option disable wrong"
                    : "option"
                }
              >
                {q.options[3]}
              </button>
            </div>
          </div>
          <i
            onClick={(e) => {
              q.quesNo !== 1 ? handleClick(q.quesNo - 1) : console.log("over");
            }}
            className="fa fa-chevron-circle-left fa-3x left"
          ></i>
          <i
            onClick={(e) => {
              q.quesNo !== 10 ? handleClick(q.quesNo + 1) : console.log("over");
            }}
            className="fa fa-chevron-circle-right fa-3x right"
          ></i>
        </div>
      ))}

      <div className="pagNo">
        {questions.map((pObj) => (
          //eslint-disable-next-line
          <a
            className={
              pObj.flagged
                ? "questionNo flagged"
                : pObj.attempted
                ? "questionNo attempted"
                : "questionNo"
            }
            value={pObj.quesNo}
            onClick={(e) => handleClick(pObj.quesNo)}
            key={pObj.quesNo}
          >
            {pObj.quesNo}
          </a>
        ))}
      </div>
    </>
  );
};

export default Ques;
