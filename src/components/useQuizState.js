import React from "react";
import { useState, useEffect } from "react";

export default (initialQues) => {
  const [Q, setQ] = useState(initialQues);

  useEffect(() => {
    localStorage.setItem("Questions", JSON.stringify(Q));
  }, [Q]);

  // const handle = () => {
  //   let val = JSON.parse(localStorage.getItem("QuizQuest"));
  //   if (val !== "") {
  //     setQ(JSON.parse(localStorage.getItem("QuizQuest")));
  //   }
  // };

  return {
    Q,

    setFlag: (obj) => {
      const t = Q.map((r) =>
        r.quesNo === obj ? { ...r, flagged: !r.flagged } : r
      );
      // localStorage.setItem("Questions", JSON.stringify(Q));
      setQ(t);
    },
    setSkip: (obj) => {
      const t = Q.map((r) =>
        r.quesNo === obj + 1 ? { ...r, skipped: !r.skipped } : r
      );
      // localStorage.setItem("Questions", JSON.stringify(Q));
      setQ(t);
    },
    setVisited: (obj) => {
      const t = Q.map((r) => (r.quesNo === obj ? { ...r, visited: true } : r));
      // localStorage.setItem("Questions", JSON.stringify(Q));
      setQ(t);
    },
    setAttempted: (obj) => {
      const t = Q.map((r) =>
        r.quesNo === obj ? { ...r, attempted: true } : r
      );
      // localStorage.setItem("Questions", JSON.stringify(Q));
      setQ(t);
    },
  };
};
