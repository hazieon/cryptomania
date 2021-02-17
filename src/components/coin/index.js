import React from "react";
import styles from "./index.module.css";
function Coin({ name, image, price }) {
  console.log(name, image, price);
  return (
    <div id="crypto-container">
      <div className="crypto-row">
        <span className={styles.spanleft}>{name}</span>
        <span className={styles.spanright}>{price}</span>
        <img src={image} alt="coin logo" />
      </div>
    </div>
  );
}

export default Coin;
