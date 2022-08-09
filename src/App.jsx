import { useState } from "react";
import Score from "./components/Score";
import Title from "./components/Title";
import Board from "./components/Board";
import Modal from "./components/Modal";
import "./styles/App.css";
import PopUp from "./components/PopUp";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [boolean, setBoolean] = useState({ isGameOver: false });
  const [win, setWin] = useState({winned: false});

  const handleClick = () => {
    if(!boolean.isGameOver){
    setScore(score + 1)
    }
  };

  const restart = () => setBoolean({isGameOver: false});

  const playAgain = () => {
    setWin({winned: false});
    setBestScore(0);
    setScore(0)
  }

  return (
    <>
      <header>
        <Title text={"Memorize"} />
        <div id="scoreboard">
          <Score text={"Current score: "} score={score} />
          <Score text={"Best score: "} score={bestScore} />
        </div>
      </header>
      <main>
        <div id="cards-container">
          <Board
            onClick={handleClick}
            setBestScore={setBestScore}
            score={score}
            boolean={boolean}
            setBoolean={setBoolean}
            setScore={setScore}
            bestScore={bestScore}
            win={win}
            setWin={setWin}
          />
        </div>
      </main>
      {boolean.isGameOver ? <Modal onClick={restart} /> : null}
      {win.winned ? <PopUp onClick={playAgain}/> : null}
    </>
  );
}

export default App;
