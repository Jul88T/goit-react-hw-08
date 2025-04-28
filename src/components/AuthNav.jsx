import { Link } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <Link to="/login" className={styles.link}>
        Login
      </Link>
      <Link to="/register" className={styles.link}>
        Register
      </Link>
    </div>
  );
};

export default AuthNav;
