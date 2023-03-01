import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiData, eatSushi }) {
  const [startingIndex, setStartingIndex] = useState(0);

  const sushiDataSlice = sushiData.slice(startingIndex, startingIndex + 4)
  
  const moreSushi = () => {
    setStartingIndex(startingIndex + 4)
  }
  const renderSushi = sushiDataSlice.map(sushi => (
  <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/> 
))

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
