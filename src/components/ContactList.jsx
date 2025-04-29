import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import Contact from "./Contact";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
