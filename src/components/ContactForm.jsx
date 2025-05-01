import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^\+?\d{10,15}$/,
        "Phone number must be 10-15 digits and can start with +"
      )
      .required("Phone number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <h2 className={styles.title}>Your Contacts</h2>
        <label className={styles.label}>
          Name:
          <Field
            type="text"
            name="name"
            className={styles.input}
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Number:
          <Field
            type="tel"
            name="number"
            className={styles.input}
            placeholder="+380XXXXXXXXX"
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
