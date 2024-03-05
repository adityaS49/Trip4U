import DownloadApp from "@/components/DownloadApp/DownloadApp";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";

const Home = (props) => {
  return (
    <main className={styles.container}>
      <Banner/>
      <DownloadApp/>
    </main>
  );
}

export default Home
