import Layout from "@/components/Layout";
import styles from "../styles/Progress.module.css";

const Progress = () => (
  <Layout>
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Progress</h1>
      <hr />
      <div className={styles.flexBox}>
        <p>Lorem ipsum dlor sit amet, consectetur adipiscing elit. Donec tincidunt ante quis orci interdum, eget aliquam sem condimentum. Aliquam id tincidunt lectus. Fusce dignissim nunc.</p>
        <p>Donec tincidunt ante quis orci interdum, eget aliquam sem condimentum. Aliquam id tincidunt lectus. Fusce dignissim nunc.</p>
        <p> Aliquam id tincidunt lectus. Fusce dignissim nunc. Donec tincidunt ante quis orci interdum, eget aliquam sem condimentum.</p>
        <div className={styles.progressCircle}>75%</div>
      </div>
    </div>
  </Layout>
);

export default Progress;
