import React, { useState, useEffect } from "react";

export default function Modal({ restartGame }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);
  return (
    <div
      style={{
        opacity: render ? 1 : 0,
        height: "100%",
        width: "100%",
        position: "absolute",
        background: "black",
      }}
    >
      <div id="gameOverImage"></div>
      <div className="tryAgain" onClick={() => restartGame()}>
        Play Again
      </div>
    </div>
  );
}
