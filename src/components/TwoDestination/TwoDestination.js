import React from 'react'
import styles from "./TwoDestination.module.css"

const TwoDestination = () => {
  return (
    <div className={styles.container}>
        <div className={styles.image_container}>
            <img src='/main_destination_1.png' />
        </div>
        <div className={styles.image_container}>
            <img src='/main_destination_2.png' />
        </div>
    </div>
  )
}

export default TwoDestination