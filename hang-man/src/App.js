import React, { useEffect, useState } from "react";
import Drawing from "./components/drawing";
import "bootstrap/dist/css/bootstrap.min.css";
import Keyboard from "./components/keyboard";
import sorular from "../src/components/sorular.json";
import Lose from "./components/lose";
import Win from "./components/win";

const App = () => {
  const [question, setQuestion] = useState({});
  const [error, setError] = useState(0);
  const [win, setWin] = useState(false);

  const stateFiller = () => {
    let random = Math.floor(Math.random() * 10);
    const newQuestion = sorular.find((item) => item.id === random);
    setQuestion(newQuestion || {});
  };

  useEffect(() => {
    stateFiller();
  }, []);
  // console.log(win);

  return (
    <>
      {error > 6 ? (
        <>
          <Lose setError={setError} stateFiller={stateFiller} />
        </>
      ) : win ? (
        <Win setError={setError} setWin={setWin} stateFiller={stateFiller} />
      ) : (
        <div>
          <Drawing error={error} />
          <Keyboard question={question} setError={setError} setWin={setWin} />
        </div>
      )}
    </>
  );
};

export default App;
