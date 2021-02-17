import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./components/coin";
const NumberFormat = require("react-number-format");
const key = process.env.KEY;
function App() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,ADA,GRT,LTC,&tsyms=BTC,USD,EUR,GBP&api_key=${key}`
      )
      .then((res) => {
        const cryptos = res.data;
        console.log(cryptos, "cryptos");
        setCryptos(cryptos.DISPLAY);
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome</h1>
      {Object.keys(cryptos).map((key) => {
        console.log({ key });
        return (
          // render coin component
          <div>
            <Coin
              name={key}
              image={cryptos[key].GBP.IMAGEURL}
              price={cryptos[key].GBP.PRICE}
            />
            {/* <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">{cryptos[key].GBP.PRICE}</span> */}
            {/* <img src={cryptos[key].GBP.IMAGEURL} alt="coin logo" /> */}
          </div>
        );
      })}
    </div>
  );
}

export default App;

//get prices only
// "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=GBP"

// {Object.keys(
//   cryptos.length > 1
//     ? cryptos.map((key) => {
//         return (
//           <div id="crypto-container">
//             <span className="left">{key}</span>
//             <span className="right">{cryptos.gbp}</span>
//           </div>
//         );
//       })
//     : ""
// )}

//  <div id="crypto-container">
//             <span className="left">{key}</span>
//             <span className="right">{"hello"}</span>
//           </div>
