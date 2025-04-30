import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/operations";
import styles from "./LoginForm.module.css";
import { selectError } from "../redux/auth/selectors";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(selectError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Login</h2>
      <label className={styles.label} htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label} htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Login
      </button>
      {error && <p className={styles.error}>{error}</p>}{" "}
    </form>
  );
};

export default LoginForm;
