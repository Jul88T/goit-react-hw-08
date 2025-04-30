import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { logout } from "../redux/auth/operations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <p className={styles.welcomeText}>
        Welcome, <strong>{user?.email}</strong>!
      </p>
      <button
        className={styles.logoutButton}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
