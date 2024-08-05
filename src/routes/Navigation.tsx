import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import { DynamicForm, RegisterPage, FormikBasicPage, FormikYupBasicPage, FormikComponents, FormikAbstraction, RegisterFormikPage } from '../03-forms/pages';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>
                Formik Base
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup-basic"
                activeClassName="nav-active"
                exact
              >
                Formik Yup Base
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                activeClassName="nav-active"
                exact
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                activeClassName="nav-active"
                exact
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik-page"
                activeClassName="nav-active"
                exact
              >
                Register Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                activeClassName="nav-active"
                exact
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup-basic">
            <FormikYupBasicPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-abstraction">
            <FormikAbstraction />
          </Route>
          <Route path="/register-formik-page">
            <RegisterFormikPage />
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
