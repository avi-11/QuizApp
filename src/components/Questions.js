import React from "react";
import { useState } from "react";
import Ques from "./Ques";

import useQuizState from "./useQuizState";

const Questions = () => {
  const [question, setQuestion] = useState(
    JSON.parse(localStorage.getItem("Questions"))
  );

  const { Q, setFlag, setSkip, setVisited, setAttempted } =
    useQuizState(question);

  return (
    <>
      <div>
        <Ques
          questions={Q}
          Flag={setFlag}
          Skip={setSkip}
          Visit={setVisited}
          Attempt={setAttempted}
        />
      </div>
    </>
  );
};

export default Questions;
