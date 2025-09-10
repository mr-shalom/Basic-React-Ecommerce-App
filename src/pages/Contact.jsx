import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/UI/Button";
import styles from "./Contact.module.css";

function Contact() {
  const { isAuthenticated } = useAuth();

  return (
    <section className={styles.contact}>
      {isAuthenticated ? <Form /> : <Instruction />}
    </section>
  );
}

function Form() {
  const [field, setField] = useState({ mTitle: "", mBody: "" });

  const { user } = useAuth();

  function handleChange(e) {
    console.log(e);
    console.log(e.target);
  }

  function handleSumit(e) {
    e.preventDefault();
    console.log(field);
  }

  return (
    <form action="" className={styles.form}>
      <fieldset className={styles.predefFields}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email..."
          value={user.email}
          readOnly
          required
        />
      </fieldset>

      <fieldset className={styles.userFields}>
        <input
          type="text"
          name="mTitle"
          id=""
          placeholder="Enter message title..."
          onChange={handleChange}
          required
        />
        <textarea
          name="mBody"
          id="fieldset"
          placeholder="Enter message body..."
          onChange={handleChange}
          required
        ></textarea>
      </fieldset>

      <Button onclick={handleSumit} className={styles.submitFormBtn}>
        Submit
      </Button>
    </form>
  );
}

function Instruction() {
  return (
    <p className={styles.instruction}>
      Please log into your account in order to send us a message 😊{" "}
    </p>
  );
}

export default Contact;
