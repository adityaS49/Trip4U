import React from "react";
import styles from "./Booking.module.css";
const Booking = () => {
  return (
    <div className={styles.booking_page}>
      <div className={styles.booking_page_top}>
        <div className={styles.booking_page_top_left}>
          <img src="/Frame.svg" alt="" />
          <span>Complete your Booking</span>
        </div>
        <div className={styles.booking_page_top_right}>
          <ul className={styles.booking_page_top_right_links}>
            <li>Flight Summary</li>
            <li>Insurance</li>
            <li>Traveller Details</li>
            <li>Seats & Meals</li>
            <li>Add-ons</li>
          </ul>
        </div>
      </div>
      <div className={styles.booking_page_bottom}>
        <div className={styles.booking_page_bottom_left}>
          <div className={styles.bookingTrip_Details}>
            <div className={styles.bookingTrip_Details_banner}>
              <div className={styles.bookingTrip_Details_top}>
                <div className={styles.bookingTrip_Details_top_left}>
                  <div className={styles.bookingTrip_Details_top_left_place}>
                    <span>New Delhi</span> <span>--</span>{" "}
                    <span>Vishakhapatnam</span>
                  </div>
                  <div className={styles.bookingTrip_Details_top_left_timing}>
                    Sunday, 26 January
                  </div>
                </div>
                <div className={styles.bookingTrip_Details_top_right}>
                 <img src="/leftArrow.svg" alt="" /> Back to Search
                </div>
              </div>
              <div className={styles.bookingTrip_Details_bottom}>
                <div className={styles.bookingTrip_Details_bottom_left}>
                  <h6>Departure</h6>
                </div>
                <div className={styles.bookingTrip_Details_bottom_right}>
                  <div className={styles.bookingTrip_Details_bottom_direction}>
                    <div className={styles.bookingTrip_Details_bottom_flight}>
                    <img src="/Flight.svg" alt="" />
                      <h6>IndiGo</h6>
                      <h6>6E 449</h6>
                      <h6>Economy</h6>
                      <p>Airbus A320-100</p>
                    </div>
                    <div className={styles.bookingTrip_Details_bottom_place}>
                      <div className={styles.flightPlaceTop}>
                        <div className={styles.flightPlace}>
                          <div>
                            <span className={styles.placeIcon}>DEL</span>{" "}
                            <span className={styles.placeLocation}>
                              New Delhi
                            </span>
                          </div>
                          <div className={styles.flightTime}>
                            <h4>5:30 PM</h4>
                            <h6>Sun, 20 Jan 2024</h6>
                            <h6>Indira Gandhi International Airport</h6>
                            <h6>Terminal 1</h6>
                          </div>
                        </div>
                        <div className={styles.flight_Status}>
                          <h6>2h 5m</h6>
                          <div className={styles.flight_Status_middle}>
                          --------   <img src="/FlightDirection.svg" alt="" />
                          </div>
                          <h6>Non-stop</h6>
                        </div>
                        <div className={styles.flightPlace}>
                          <div>
                            <span className={styles.placeIcon}>DEL</span>{" "}
                            <span className={styles.placeLocation}>
                              New Delhi
                            </span>
                          </div>
                          <div className={styles.flightTime}>
                            <h4>5:30 PM</h4>
                            <h6>Sun, 20 Jan 2024</h6>
                            <h6>Indira Gandhi International Airport</h6>
                            <h6>Terminal 1</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles.baggage_details}>
                        <div className={styles.baggages}>
                          <span>Check-in:</span> <p> 15KG (1Piece Only)</p>
                        </div>
                        <div className={styles.baggages}>
                          <span>Cabin Baggage:</span>
                          <p>7KG(1 piece per tax)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bookingTrip_Details_right_center}>
                        <div className={styles.planeChange}>
                        Change Plane at <span>Vishakhapatnam(VTZ)</span>, connecting time <span>1h 20m</span>
                        </div>
                  </div>
                  <div className={styles.bookingTrip_Details_bottom_direction}>
                    <div className={styles.bookingTrip_Details_bottom_flight}>
                     <img src="/Flight.svg" alt="" />
                      <h6>IndiGo</h6>
                      <h6>6E 449</h6>
                      <h6>Economy</h6>
                      <p>Airbus A320-100</p>
                    </div>
                    <div className={styles.bookingTrip_Details_bottom_place}>
                      <div className={styles.flightPlaceTop}>
                        <div className={styles.flightPlace}>
                          <div>
                            <span className={styles.placeIcon}>DEL</span>{" "}
                            <span className={styles.placeLocation}>
                              New Delhi
                            </span>
                          </div>
                          <div className={styles.flightTime}>
                            <h4>5:30 PM</h4>
                            <h6>Sun, 20 Jan 2024</h6>
                            <h6>Indira Gandhi International Airport</h6>
                            <h6>Terminal 1</h6>
                          </div>
                        </div>
                        <div className={styles.flight_Status}>
                          <h6>2h 5m</h6>
                          <div className={styles.flight_Status_middle}>
                            --------<img src="/FlightDirection.svg" alt="" />
                          </div>
                          <h6>Non-stop</h6>
                        </div>
                        <div className={styles.flightPlace}>
                          <div>
                            <span className={styles.placeIcon}>DEL</span>{" "}
                            <span className={styles.placeLocation}>
                              New Delhi
                            </span>
                          </div>
                          <div className={styles.flightTime}>
                            <h4>5:30 PM</h4>
                            <h6>Sun, 20 Jan 2024</h6>
                            <h6>Indira Gandhi International Airport</h6>
                            <h6>Terminal 1</h6>
                          </div>
                        </div>
                      </div>
                      <div className={styles.baggage_details}>
                        <div className={styles.baggages}>
                          <span>Check-in:</span> <p> 15KG (1Piece Only)</p>
                        </div>
                        <div className={styles.baggages}>
                          <span>Cabin Baggage:</span>
                          <p>7KG(1 piece per tax)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bookingTrip_Cancellation}></div>
        </div>
        <div className={styles.booking_page_bottom_right}></div>
      </div>
    </div>
  );
};

export default Booking;
