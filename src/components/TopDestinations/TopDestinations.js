"use client";
import { useState } from "react";
import styles from "./TopDestinations.module.css";

const TopDestinations = () => {
  const [destinations, setDestionations] = useState([
    { destination: "DUBAI", color: "#602F70" },
    { destination: "MALDIVES", color: "#075962" },
    { destination: "BALI", color: "#2A6B97" },
    { destination: "SINGAPORE", color: "#002865" },
    { destination: "KASHMIR", color: "#9B321F" },
    { destination: "LAKSHADWEEP", color: "#3D4438" },
    { destination: "AGRA", color: "#655850" },
    { destination: "AUSTRALIA", color: "#77441F" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.heading_container}></div>
      <div className={styles.heading_text}>Top Tourist Places</div>
      <div className={styles.destinations_container}>
        {destinations.map((item, index) => {
          return (
            <div key={index} className={styles.destinations_card}>
              <img src="/top_destinations_1.png" />
              <button
                className={styles.destinations_button}
                style={{
                  backgroundColor: item.color,
                }}
              >
                <span>VISIT {item.destination}</span>
                <img src="/chevron_right.svg" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopDestinations;
