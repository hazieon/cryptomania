import React, { useState } from "react";
import styles from "./index.module.css";
function Coin({
  name,
  symbol,
  image,
  price,
  hour,
  day,
  priceChange,
  marketCap,
  supply,
}) {
  const [clicked, setClicked] = useState(false);
  //ensure priceChange value is a number for + or - evaluation, need to remove £ sign for that
  var priceChangeNum = Number(priceChange.replace(/[^0-9\.-]+/g, ""));
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
            <p className={styles.label}>24hr change:</p>
            <h3
              className={
                priceChangeNum > 0 ? styles.dataPlus : styles.dataMinus
              }
            >
              {priceChange}
            </h3>
          </span>
        </section>
        <section className={clicked ? styles.section : styles.sectionNONE}>
          <span className={styles.dataContainer}>
            <p className={styles.label}>Market cap:</p>
            <h3 className={styles.dataPlus}>{marketCap}</h3>
          </span>
          <span className={styles.dataContainer}>
            <p className={styles.label}>Supply:</p>
            <h3 className={styles.dataPlus}>{supply}</h3>
          </span>
        </section>
      </div>
    </div>
  );
}

export default Coin;
