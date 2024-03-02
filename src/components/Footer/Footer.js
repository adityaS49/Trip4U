import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer__column}>
          <div>Popular Destinations</div>
          <div>Popular International Destinations</div>
          <div>Popular Airlines</div>
          <div>Exclusive Offers</div>
          <div>Quick Links</div>
        </div>
        <div className={styles.footer__destinations_column}>
          <div>Explore the most searched domestic destinations</div>
          <div className={styles.footer__destinations_column_columns_container}>
            <div
              className={
                styles.footer__destinations_column_columns_container_column
              }
            >
              <Link
                href={"/Goa"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Goa
              </Link>
              <Link
                href={"/Manali"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Manali
              </Link>
              <Link
                href={"/Kerala"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Kerala
              </Link>
              <Link
                href={"/Shimla"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Shimla
              </Link>
              <Link
                href={"/Srinagar"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Srinagar
              </Link>
              <Link
                href={"/Kashmir"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Kashmir
              </Link>
              <Link
                href={"/Himachal"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Himachal
              </Link>
            </div>
            <div
              className={
                styles.footer__destinations_column_columns_container_column
              }
            >
              <Link
                href={"/Goa"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Goa
              </Link>
              <Link
                href={"/Manali"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Manali
              </Link>
              <Link
                href={"/Kerala"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Kerala
              </Link>
              <Link
                href={"/Shimla"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Shimla
              </Link>
              <Link
                href={"/Srinagar"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Srinagar
              </Link>
              <Link
                href={"/Kashmir"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Kashmir
              </Link>
              <Link
                href={"/Himachal"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Himachal
              </Link>
            </div>
            <div
              className={
                styles.footer__destinations_column_columns_container_column
              }
            >
              <Link
                href={"/Goa"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Goa
              </Link>
              <Link
                href={"/Manali"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Manali
              </Link>
              <Link
                href={"/Kerala"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Kerala
              </Link>
              <Link
                href={"/Shimla"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Shimla
              </Link>
              <Link
                href={"/Srinagar"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Srinagar
              </Link>
              <Link
                href={"/Kashmir"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Kashmir
              </Link>
              <Link
                href={"/Himachal"}
                className={
                  styles.footer__destinations_column_columns_container_column_text
                }
              >
                Himachal
              </Link>
            </div>
          </div>
        </div>
        <img src="/grey-logo.svg" className={styles.footer__logo_column} />
      </div>
      <span className={styles.border}>{" "}</span>
      <div className={styles.footer__copyright_container}>
          <p className={styles.footer__copyright}>© Copyright 2024. TripforU.</p>
        <div className={styles.footer__social}>
          <span>Follow for offers & updates</span>
          <a href="#">
            <img src="/instagram.svg" />
          </a>
          <a href="#">
            <img src="/x.svg" />
          </a>
          <a href="#">
            <img src="/facebook.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
