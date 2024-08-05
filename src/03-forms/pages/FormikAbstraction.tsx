import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstraction = () => {
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
          <Form noValidate>
            <MyTextInput label="First Name" name="firstName" type="text" placeholder="First Name" />
            <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Last Name" />
            <MyTextInput label="Email" name="email" type="email" placeholder="Email" />
            <MySelect label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>
            <MyCheckbox
              label="Terms & Conditions"
              name="terms"
            />
            <button type="submit">Submit</button>
            <button type="button">Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
