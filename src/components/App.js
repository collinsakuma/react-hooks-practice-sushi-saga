import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([]);
  const [moneyLeft, setMoneyLeft] = useState(100);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(sushis => {
        const modifiedSushis = sushis.map(sushi => {
          return {...sushi, isEaten: false}
        })
        setSushiData(modifiedSushis)
      })
  },[])

  const eatSushi = (eatenSushi) => {
    if(eatenSushi.price <= moneyLeft) {
      const updatedSushis = sushiData.map(sushi => {
        if(sushi.id === eatenSushi.id) {
          return {...sushi, isEaten: true};
        } else {
          return sushi;
        }
      })
      setSushiData(updatedSushis)
      setMoneyLeft(moneyLeft => moneyLeft - eatenSushi.price)
    } else {
      alert("not enough money")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushiData={sushiData} eatSushi={eatSushi}/>
      <Table plates={sushiData.filter(sushi => sushi.isEaten === true)} moneyLeft={moneyLeft}/>
    </div>
  );
}

export default App;
