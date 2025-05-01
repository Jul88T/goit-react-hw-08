import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.contactContainer}>
      {filteredContacts.length > 0 ? (
        <ul className={styles.contactList}>
          {filteredContacts.map((contact) => (
            <li key={contact.id} className={styles.contactItem}>
              <span className={styles.contactText}>
                {contact.name}: {contact.number}
              </span>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.contacts}>No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;
