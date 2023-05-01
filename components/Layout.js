import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({children}) => (
  <>
    <Nav />
    <div className={styles.pageWrap}>{children}</div>
  </>
);

export default Layout;
