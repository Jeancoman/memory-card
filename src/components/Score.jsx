function Score({ score, text }) {
  return (
    <div className="score">
      <div className="score-text">
        {text}
        {score}
      </div>
    </div>
  );
}

export default Score;