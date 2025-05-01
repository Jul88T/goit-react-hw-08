import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ContactList from "../components/ContactList";

const ContactsPage = () => {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <section>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </section>
  );
};

export default ContactsPage;
