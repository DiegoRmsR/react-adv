import "../styles/styles.css";
import { useForm } from "../hooks/useForm";
import * as Yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { MyTextInput } from "../components";
export const RegisterFormikPage = () => {
  // const {
  //   name,
  //   email,
  //   password,
  //   confirmPassword,
  //   onChangeForm,
  //   onSubmitForm,
  //   resetForm,
  // } = useForm({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const isValidEmail = (email: string) => {
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email.toLowerCase());
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit(values) {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords do not match"
      ),
    }),
  });
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values:any) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password")],
            "Passwords do not match"
          ),
        })}
        >
          {({ handleSubmit, handleReset }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <MyTextInput label="Name" name="name" type="text" placeholder="Name" />
              <MyTextInput label="Email" name="email" type="email" placeholder="Email" />
              <MyTextInput label="Password" name="password" type="password" placeholder="Password" />
              <MyTextInput label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm Password" />
              <button type="submit" >Submit</button>
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </Form>
          )}
        </Formik>
    </div>
  );
};
