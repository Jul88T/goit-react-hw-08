import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ContactList from "../components/ContactList";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Your Contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </section>
  );
};

export default ContactsPage;
