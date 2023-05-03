import Layout from "@/components/Layout";
import styles from "../styles/Stats.module.css";

const Stats = () => (
  <Layout>
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Stats</h1>
      <hr />
      <ul className={styles.stats}>
        <li className={styles.statsItem}><b>Height:</b> 5'10</li>
        <li className={styles.statsItem}><b>Weight:</b> 180 lbs</li>
        <li className={styles.statsItem}><b>Sex:</b> Male</li>
        <li className={styles.statsItem}><b>Age:</b> 24</li>
        <li className={styles.statsItem}><b>Activity:</b> 2hrs 3 days a week</li>
      </ul>
    </div>
  </Layout>
);

export default Stats;
