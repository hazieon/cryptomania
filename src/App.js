import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.css";
import Coin from "./components/coin";
const key = process.env.KEY;
function App() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,ADA,GRT,LTC,DOT,LINK,BNB,XLM&tsyms=BTC,USD,EUR,GBP&api_key=${key}`
      )
      .then((res) => {
        const cryptos = res.data;
        console.log(cryptos, "cryptos");
        setCryptos(cryptos.DISPLAY);
      });
  }, []);

  //add a nav bar with a link to somewhere
  //refresh page button
  //add more coins, and add a search
  return (
    <>
      <div className={styles.App}>
        <nav></nav>
        <h1 className="heading">Cryptomania</h1>
        {Object.keys(cryptos).map((key) => {
          console.log({ key });
          return (
            // render coin component
            <div>
              <Coin
                name={key}
                symbol={cryptos[key].GBP.FROMSYMBOL}
                image={cryptos[key].GBP.IMAGEURL}
                price={cryptos[key].GBP.PRICE}
                hour={cryptos[key].GBP.CHANGEPCTHOUR}
                day={cryptos[key].GBP.CHANGEPCT24HOUR}
                priceChange={cryptos[key].GBP.CHANGE24HOUR}
                marketCap={cryptos[key].GBP.MKTCAP}
                supply={cryptos[key].GBP.SUPPLY}
              />
            </div>
          );
        })}
      </div>
    </>
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
