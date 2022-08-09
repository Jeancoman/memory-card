import { useEffect, useRef } from "react";

function Card({
  src,
  key,
  onClick,
  setBestScore,
  setScore,
  score,
  bestScore,
  boolean,
  setBoolean,
  win,
  setWin,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const clickFunction = (e) => {
      if ("clicked" in e.currentTarget.dataset) {
        setBoolean({
          isGameOver: true,
        })
      } else if ("clicked" in e.currentTarget.dataset !== true) {
        element.dataset.clicked = "";
      }
    };

    element.addEventListener("click", clickFunction);

    return () => {
      element.removeEventListener("click", clickFunction);
    };
  }, [ref.current]);

  useEffect(() => {
    const element = ref.current;

    if(boolean.isGameOver && score > bestScore) {
      setBestScore(score)
    }

    if (boolean.isGameOver) {
      delete element.dataset.clicked;
      setScore(0)
    }


  }, [ref.current, boolean.isGameOver]);

  useEffect(() => {
    if(score === 9) {
      setWin({winned: true});
    }

  },[score])

  useEffect(() => {
    const element = ref.current;

    if (win.winned) {
      delete element.dataset.clicked;
    }

  },[win.winned])

  return (
    <div className="card" onClick={onClick} key={key} ref={ref}>
      <img src={src} alt="" />
    </div>
  );
}

export default Card;
