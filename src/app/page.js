import DownloadApp from "@/components/DownloadApp/DownloadApp";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import AdStrip from "@/components/AdStrip/AdStrip";
import Carousel from "@/components/Crousel/Crousel";

const Home = (props) => {
  return (
    <main className={styles.container}>
      <Banner/>
      <AdStrip/>
      <Carousel/>
      <DownloadApp/>
    </main>
  );
}

export default Home
