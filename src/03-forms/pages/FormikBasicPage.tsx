import { useFormik, FormikErrors } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}
export const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    } else if (values.firstName.length >= 10) {
      errors.firstName = "First Name must be less than 10 characters";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    } else if (values.lastName.length >= 10) {
      errors.lastName = "Last Name must be less than 10 characters";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const {
    values: { firstName, lastName, email },
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,

  });

  return (
    <div>
      <h1>Formk Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={firstName}
        />
        { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={lastName}
        />
        { touched.lastName &&errors.lastName && <span>{errors.lastName}</span> }

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={email}
        />
        { touched.email && errors.email && <span>{errors.email}</span> }

        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};
