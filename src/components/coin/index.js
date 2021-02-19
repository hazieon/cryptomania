import React, { useState } from "react";
import styles from "./index.module.css";
function Coin({ name, image, price, hour, day, priceChange }) {
  const [clicked, setClicked] = useState(false);
  console.log(name, image, price);

  function toggleClicked() {
    setClicked(!clicked);
  }
  return (
    <div id="crypto-container" onClick={toggleClicked}>
      <div className="crypto-row">
        <img
          src={`https://www.cryptocompare.com${image}`}
          alt="coin logo"
          className={styles.coinImg}
        />
        <span className={styles.spanleft}>{name}</span>
        <span className={styles.spanright}>{price}</span>

        <section className={clicked ? styles.section : styles.sectionNONE}>
          <span className={styles.dataContainer}>
            <p className={styles.label}>1hr:</p>
            <h3 className={hour > 0 ? styles.dataPlus : styles.dataMinus}>
              {hour}%
            </h3>
          </span>
          <span className={styles.dataContainer}>
            <p className={styles.label}>24hr:</p>
            <h3 className={day > 0 ? styles.dataPlus : styles.dataMinus}>
              {day}%
            </h3>
          </span>
          <span className={styles.dataContainer}>
            <p className={styles.label}>24hr price:</p>
            <h3
              className={priceChange > 0 ? styles.dataPlus : styles.dataMinus}
            >
              {priceChange}
            </h3>
          </span>

          {/* <h3>price usd</h3>
          <h3>price eur</h3>
          <h3>price btc</h3> */}
        </section>
      </div>
    </div>
  );
}

export default Coin;
