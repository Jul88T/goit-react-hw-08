import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters long")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setErrorMessage("");
      const resultAction = await dispatch(register(values));

      if (register.fulfilled.match(resultAction)) {
        resetForm();
        navigate("/contacts");
      } else {
        setErrorMessage(resultAction.payload || "Registration failed.");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <h2 className={styles.title}>Register</h2>

        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        <label htmlFor="name" className={styles.label}>
          Username:
          <Field
            type="text"
            name="name"
            className={styles.input}
            placeholder="Your name"
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label htmlFor="email" className={styles.label}>
          Email:
          <Field
            type="email"
            name="email"
            className={styles.input}
            placeholder="example@mail.com"
          />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>

        <label htmlFor="password" className={styles.label}>
          Password:
          <Field
            type="password"
            name="password"
            className={styles.input}
            placeholder="At least 7 characters"
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </label>

        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
