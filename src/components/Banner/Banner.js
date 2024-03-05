import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__top}>
        <div className={styles.banner__top_selected}>
          <span>
            <img src="/flight-white-icon.svg" />
          </span>
          <span className={styles.banner__top_text}>Flights</span>
        </div>
        <div>
          <span>
            <img src="/hotel-icon-black.svg" />
          </span>
          <span className={styles.banner__top_text}>Hotels</span>
        </div>
      </div>

      <div className={styles.banner__menu}>
        <div className={styles.banner__menu_type}>
          <div className={styles.banner__menu_type_text}>One Way</div>
          <div className={styles.banner__menu_type_text}>Round Trip</div>
          <div className={styles.banner__menu_type_text}>Multi-City</div>
        </div>
        <div className={styles.banner__menu_direct}>
          <input type="checkbox" />
          <div>Direct Flights</div>
        </div>
      </div>

      <div className={styles.banner__board}>
        <div className={styles.banner__board_text_container}>
          <div>From</div>
          <span>Bhubaneshwar</span>
          <p>
            <span>[DEL]</span> Indira Gandhi International Airport
          </p>
        </div>
        <div>
          <img src="/two-way-arrow.svg" />
        </div>
        <div className={styles.banner__board_text_container}>
          <div>To</div>
          <span>Vishakhapatnam</span>
          <p>
            <span>[BOM]</span> Chhatrapati Shivaji International
          </p>
        </div>
        <div
          className={`${styles.banner__board_text_container} ${styles.banner__board_text_cont_width_15}`}
        >
          <div className={styles.rowFlex}>
            <span>
              <img src="departure.svg" />
            </span>
            DEPARTURE
          </div>
          <span>20 Jan</span>
          <p>Sunday</p>
        </div>
        <div
          className={`${styles.banner__board_text_container} ${styles.banner__board_text_cont_width_15}`}
        >
          <div className={styles.rowFlex}>
            <span>
              <img src="arrival.svg" />
            </span>
            ARRIVAL
          </div>
          <button className={styles.save_more_button}>Save more!</button>
          <p>Book round trips</p>
        </div>
        <div
          className={`${styles.banner__board_text_container} ${styles.banner__board_text_cont_width_20}`}
        >
          <div className={styles.rowFlex}>
            <span>
              <img src="user-icon.svg" />
            </span>
            Traveller/Class
          </div>
          <span>
            5 Pax <span className={styles.travelling_class}>(2A,2C,1I)</span>
          </span>
          <p>Economy</p>
        </div>
        <div className={styles.banner__board_search}>
          <div>Search</div>
          <span>Lowest Price</span>
        </div>
      </div>

      <div className={styles.banner__boardbottom_menu}>
        <div className={styles.bottom_menu_text}>
          <img src="defense.svg" />
          <span>Defense Forces</span>
        </div>
        <div className={styles.bottom_menu_text}>
          <img src="student.svg" />
          <span>Student</span>
        </div>
        <div className={styles.bottom_menu_text}>
          <img src="senior.svg" />
          <span>Senior Citizen</span>
        </div>
        <div className={styles.bottom_menu_text}>
          <img src="doctor.svg" />
          <span>Doctor/Nurses</span>
        </div>
      </div>

      <div className={styles.banner__bottomcover_menu}>
        <div className={styles.bottom_heading}>
          <div className={styles.bottom_heading_text}>Recent Searches</div>
          <div className={styles.banner__bottom_menu}>
            <div className={styles.bottomdown_menu}>
              <span>DEL BOM</span>
              <p>18 Jan</p>
            </div>
            <div className={styles.bottomdown_menu}>
              <span>IXC GAU</span>
              <p>22 Jan</p>
            </div>
            <div className={styles.bottomdown_menu}>
              <span>BOM VTZ</span>
              <p>9 Jan</p>
            </div>
            <div className={styles.bottomdown_menu}>
              <span>DEL BOM</span>
              <p>11 Feb</p>
            </div>
            <div className={styles.bottomdown_menu}>
              <span>DEL BOM</span>
              <p>18 Jan</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom_heading}>
          <div className={styles.bottom_heading_text}>
            Fares from Bhubaneshwar
          </div>
          <div className={styles.banner__bottom_menu}>
            <div className={styles.bottomdown_menu}>
              <span>DEL BOM</span>
              <p>18 Jan</p>
            </div>
            <div className={styles.bottomdown_menu}>
              <span>IXC GAU</span>
              <p>18 Jan</p>
            </div>
            <div className={styles.bottomdown_menu}>
              <span>BOM VTZ</span>
              <p>18 Jan</p>
            </div>
            <div className={styles.bottomdown_menu}>
              <span>DEL BOM</span>
              <p>18 Jan</p>
            </div>
            <div className={styles.bottomdown_menu}>
              <span>DEL BOM</span>
              <p>18 Jan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
