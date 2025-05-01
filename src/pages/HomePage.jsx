import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.container}>
      <h1>Welcome to the Phonebook App!</h1>
      <p>Register or log in to manage your contacts.</p>
    </section>
  );
};

export default HomePage;
