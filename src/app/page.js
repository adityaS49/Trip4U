import DownloadApp from "@/components/DownloadApp/DownloadApp";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import AdStrip from "@/components/AdStrip/AdStrip";
import Carousel from "@/components/Crousel/Crousel";
import FixedFlights from "@/components/FixedFlights/FixedFlights";
import TopDestinations from "@/components/TopDestinations/TopDestinations";
import Booking from "@/components/Booking/Booking";

const Home = (props) => {
  return (
    <main className={styles.container}>
      <Banner />
      <AdStrip />
      <Carousel />
      <FixedFlights />
      <TopDestinations />
      <DownloadApp />

      <Booking />
    </main>
  );
};

export default Home;
