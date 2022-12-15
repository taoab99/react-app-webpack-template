import React, { useState } from "react";

function Couter() {
  const [couter, setCouter] = useState<number>(0);
  const buikhactao = "bui khac tao";
  const handleIncrement = () => {
    console.log(buikhactao);
    setCouter((prevState) => prevState + 1);
  };
  return (
    <div>
      <p style={{ color: "red" }}>{couter}</p>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}

export default Couter;
