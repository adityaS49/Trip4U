"use client";

import React from "react";
import styles from "./Carousel.module.css";
import Slider from "react-slick";

const images = [
  {
    "image":"/destination_1.png",
    "color": "#BC7444",
  },
  {
    "image":"/destination_2.png",
    "color": "#4C81AD",
  },
  {
    "image":"/destination_3.png",
    "color": "#977BD0",
  },
  {
    "image":"/destination_4.png",
    "color": "#3D583B",
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
  };

  return (
    <div className={styles.container}>
      {/* <Slider {...settings}> */}
        {images.map((item, index) => {
          return (
            <div key={index} className={styles.services}>
              <img src={item.image} />
              <div className={styles.services__items} style={{
                backgroundColor:item.color,
              }}>
                <div className={styles.services__item_off}>FLAT <span>₹100 OFF</span></div>
                <div className={styles.services__item_second}>
                    New User Offer on First Flight Booking
                </div>
                <div className={styles.services__item_third}>
                Valid till Jan 31, 2024
                </div>
                <div className={styles.services__item_fourth}>
                    <div className={styles.services__item_fourth_code_container}>
                        <div>Use Code</div>
                        <span>TFY100</span>
                    </div>
                    <img src="/copy.svg" alt="copy" />
                </div>
              </div>
            </div>
          );
        })}
      {/* </Slider> */}
    </div>
  );
};

export default Carousel;
