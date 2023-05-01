import Layout from "@/components/Layout";
import styles from "../styles/Stats.module.css";

const Stats = () => (
  <Layout>
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Stats</h1>
      <hr />
      <ul className={styles.stats}>
        <li className={styles.statsItem}>Height:</li>
        <li className={styles.statsItem}>Weight:</li>
        <li className={styles.statsItem}>Sex:</li>
        <li className={styles.statsItem}>Age:</li>
        <li className={styles.statsItem}>Activity:</li>
      </ul>
    </div>
  </Layout>
);

export default Stats;
