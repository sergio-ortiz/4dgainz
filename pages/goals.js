import Layout from "@/components/Layout";
import styles from "../styles/Stats.module.css";

const Goals = () => (
  <Layout>
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Goals</h1>
      <hr />
      <ul className={styles.stats}>
        <li className={styles.statsItem}>Weight:</li>
        <li className={styles.statsItem}>Measurements:</li>
        <li className={styles.statsItem}>Plans:</li>
      </ul>
    </div>
  </Layout>
);

export default Goals;
