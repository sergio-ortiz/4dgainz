import Layout from "@/components/Layout";
import styles from "../styles/Stats.module.css";

const Goals = () => (
  <Layout>
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Goals</h1>
      <hr />
      <ul className={styles.stats}>
        <li className={styles.statsItem}><b>Weight:</b> 200lbs</li>
        <li className={styles.statsItem}><b>Measurements:</b> back: 18&quot;, chest: 44&quot;, biceps: 16&quot;</li>
        <li className={styles.statsItem}><b>Plans:</b> build muscle</li>
      </ul>
    </div>
  </Layout>
);

export default Goals;
