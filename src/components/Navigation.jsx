import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <div className={styles.leftSide}>
        <Link to="/" className={styles.logo}>
          Phonebook
        </Link>

        {isLoggedIn && (
          <Link to="/contacts" className={styles.link}>
            Contacts
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
