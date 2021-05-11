import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.css";
import Coin from "./components/coin";
const key = process.env.KEY;

const currencies = ["GBP", "USDT", "EUR", "BTC"];

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [currency, setCurrency] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,ADA,GRT,XLM,LTC,DOT,LINK,PAXG,BNB,SHIB,DOGE&tsyms=USDT,BTC,USD,EUR,GBP&api_key=${key}`
      )
      .then((res) => {
        const cryptos = res.data;
        setCryptos(cryptos.DISPLAY);
      });
  }, []);

  function currencyChange() {
    if (currency < currencies.length - 1) {
      setCurrency(currency + 1);
    }
    if (currency === currencies.length - 1) {
      setCurrency(0);
    }
  }

  //add a nav bar with a link to somewhere
  //refresh page button
  //add more coins, and add a search
  return (
    <>
      <div className={styles.App}>
        <div className="header">
          <h1 className="heading">Cryptomania</h1>

          <button className="currency-select" onClick={currencyChange}>
            Switch currency to:{" "}
            {currency !== currencies.length - 1
              ? currencies[currency + 1]
              : "GBP"}
          </button>
        </div>
        {Object.keys(cryptos).map((key) => {
          return (
            // render coin component
            <div>
              <Coin
                name={key}
                symbol={cryptos[key][currencies[currency]].FROMSYMBOL}
                image={cryptos[key][currencies[currency]].IMAGEURL}
                price={cryptos[key][currencies[currency]].PRICE}
                hour={cryptos[key][currencies[currency]].CHANGEPCTHOUR}
                day={cryptos[key][currencies[currency]].CHANGEPCT24HOUR}
                priceChange={cryptos[key][currencies[currency]].CHANGE24HOUR}
                marketCap={cryptos[key][currencies[currency]].MKTCAP}
                supply={cryptos[key][currencies[currency]].SUPPLY}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
