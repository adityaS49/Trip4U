"use client";
import { useState } from "react";
import styles from "./FixedFlights.module.css";

const FixedFlights = () => {
  const [destinations, setDestionations] = useState([
    { name: "Vishakhapatnam", ticker: "VTZ" },
    { name: "Delhi", ticker: "DHL" },
    { name: "Kolkata", ticker: "VTZ" },
    { name: "Kerala", ticker: "VTZ" },
    { name: "Indore", ticker: "VTZ" },
    { name: "Mumbai", ticker: "VTZ" },
    { name: "Hyderabad", ticker: "VTZ" },
    { name: "Vishakhapatnam", ticker: "VTZ" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.fixed_flights_text}>FIXED FLIGHTS FROM ROUTES</div>
      <div className={styles.fixed_destination_container}>
        {destinations.map((destination, index) => {
          return (
            <div className={styles.destination}>
              <img src="/destination_mini.svg" />
              <div className={styles.destination_text_container}>
                <span>{destination.name}</span>
                <p>{destination.ticker}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.view_all_container}>
        <span>View all</span>
        <img src="chevron_down.svg" />
      </div>
    </div>
  );
};

export default FixedFlights;
