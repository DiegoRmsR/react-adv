import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formk Basic Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().oneOf([true], "Must Accept Terms"),
          jobType: Yup.string()
            .notOneOf(["other"], "Please select a job type")
            .required("Required"),
        })}
      >
        {(formik) => (
          <form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="span" />
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Field>

            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              <Field type="checkbox" name="terms" />
              Terms and onditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>

            <button type="button">Reset</button>
          </form>
        )}
      </Formik>
    </div>
  );
};