import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ContactList from "../components/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </section>
  );
};

export default ContactsPage;
