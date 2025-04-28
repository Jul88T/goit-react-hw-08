import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(3).required("Required"),
  number: Yup.string().min(3).required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.fieldWrapper}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <Field className={styles.input} type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.fieldWrapper}>
          <label className={styles.label} htmlFor="number">
            Number:
          </label>
          <Field
            className={styles.input}
            type="text"
            id="number"
            name="number"
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
