import React from 'react'
import styles from "./AdStrip.module.css"

const AdStrip = () => {
    return (
        <div className={styles.grid}>
          <div className={styles.grid__item_odd}>
            <img src="/thunder.svg" />
            <p>Lightning Fast Bookings</p>
          </div>
          <div className={styles.grid__item_even}></div>
          <div className={styles.grid__item_odd}>
            <img src="/thunder.svg" />
            <p>Easy and Flexible</p>
          </div>
          <div className={styles.grid__item_even}></div>
          <div className={styles.grid__item_odd}>
            <img src="/thunder.svg" />
            <p>Multiple Payment Options</p>
          </div>
          <div className={styles.grid__item_even}></div>
          <div className={styles.grid__item_odd}>
            <img src="/thunder.svg" />
            <p>24/7 Customer Support</p>
          </div>
        </div>
      );
}

export default AdStrip