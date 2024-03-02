import DownloadApp from "@/components/DownloadApp/DownloadApp";
import styles from "./page.module.css";

const Home = (props) => {
  return (
    <main className={styles.container}>
      
      <DownloadApp/>
    </main>
  );
}

export default Home
