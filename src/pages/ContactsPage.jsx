import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ContactList from "../components/ContactList";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Your Contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </section>
  );
};

export default ContactsPage;
