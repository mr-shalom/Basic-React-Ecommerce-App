import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "./UI/Button";
import styles from "./Login.module.css";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const { login } = useAuth();

  function handleForm(e) {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    if (state.email || state.password) {
      login({ email: state.email, password: state.password });
      navigate("/app/products");
    }
    setState({ email: "", password: "" });
  }

  useEffect(() => {}, [state]);

  return (
    <section className={styles.formWrapper}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <h1>Login</h1>
        <section className={styles.fields}>
          <fieldset>
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
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
            New user ?{" "}
            <Link className={styles.createNewAccount} to="/signup">
              Create a new account
            </Link>
          </small>
        </section>
      </form>
    </section>
  );
}

export default Login;
