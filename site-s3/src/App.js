import React, { useState } from 'react';

function App() {
  const [lotteryResult, setLotteryResult] = useState("");
  const [noteResult, setNoteResult] = useState("");

  const getLotteryResult = async () => {
    const response = await fetch("http://localhost:8000/lottery");
    const data = await response.json();
    console.log(data);
    setLotteryResult(JSON.stringify(data));
  };

  const getNoteResult = async () => {
    const response = await fetch("http://localhost:8000/notas");
    const data = await response.json();
    setNoteResult(JSON.stringify(data));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button style={{ backgroundColor: "lightblue", color: "black", width: "100px", height: "50px", margin: "0 30px" }} onClick={getLotteryResult}>LOTTERY</button>
      <button style={{ backgroundColor: "lightblue", color: "black", width: "100px", height: "50px", margin: "0 30px" }} onClick={getNoteResult}>NOTAS</button>
      <div>{lotteryResult}</div>
      <div>{noteResult}</div>
    </div>
  );
}

export default App;