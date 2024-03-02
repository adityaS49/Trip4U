import styles from "./DownloadApp.module.css";

const DownloadApp = () => {
  return (
    <div className={styles.downloadApp}>
      <img
        src="/phone.svg"
        alt="Download the Mobile App!"
      />
      <div className={styles.downloadApp__info}>
        <p className={styles.downloadApp__infoText}>
          FLAT 12% OFF*
        </p>
        <p className={styles.downloadApp__headingText}>
          Download the Mobile App!
        </p>
        <p className={styles.downloadApp__supportText}>
          Use code <span>WELCOMETFU</span> on your first domestic flight booking.
        </p>
        <div className={styles.downloadApp__buttonContainer}>
          <div
            className={styles.downloadApp__country_code}
          >
            <img
            src="/india.svg"
            />
            <span>+91</span>
          </div>
          <input
            className={styles.downloadApp__input}
            type="text"
            placeholder="Enter mobile number"
          />
          <button className={styles.downloadApp__button}>Get Download Link</button>
        </div>
      </div>
      <div className={styles.downloadApp__downloadContainer}>
        <span className={styles.downloadApp__downloadText}>AVAILABLE ON</span>
          <img
            src="/play-store.svg"
            alt="App Store"
            style={{cursor:"pointer"}}
          />
          <img
            src="/apple-store.svg"
            alt="Google Play"
            style={{cursor:"pointer"}}
          />
      </div>
    </div>
  );
};

export default DownloadApp;
