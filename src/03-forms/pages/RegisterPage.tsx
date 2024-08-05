import "../styles/styles.css";
import { useForm } from "../hooks/useForm";
export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    onChangeForm,
    onSubmitForm,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={onChangeForm}
          className="has-error"
        />
        {name.trim().length <= 0 && (
          <span className="error">Name is required</span>
        )}
        <input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChangeForm}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && (
          <span className="error">Email is not valid</span>
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={onChangeForm}
          className="has-error"
        />
        {password.trim().length <= 0 && (
          <span className="error">Password is required</span>
        )}
        {password.trim().length < 6 && (
          <span className="error">Password must be at least 6 characters</span>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={onChangeForm}
          className="has-error"
        />
        {confirmPassword !== password && (
          <span className="error">Passwords do not match</span>
        )}
        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
