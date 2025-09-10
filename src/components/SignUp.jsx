import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import Button from "./UI/Button";

import { useAuth } from "../hooks/useAuth";

function SignUp() {
  const [state, setState] = useState({ name: "", email: "", password: "" });

  function handleForm(e) {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {}, [state]);

  function handleSubmit() {
    setState({ name: "", email: "", password: "" });
  }
  return (
    <section className={styles.formWrapper}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <h1>SignUp</h1>
        <section className={styles.fields}>
          <fieldset>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={state.name}
              onChange={handleForm}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={state.email}
              onChange={handleForm}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={state.password}
              onChange={handleForm}
              required
            />
          </fieldset>

          <Button
            type="submit"
            onclick={handleSubmit}
            className={styles.submitBtn}
          >
            Login
          </Button>

          <small className={styles.newUser}>
            Already have an account ?{" "}
            <Link className={styles.createNewAccount} to="/login">
              Login
            </Link>
          </small>
        </section>
      </form>
    </section>
  );
}

export default SignUp;
