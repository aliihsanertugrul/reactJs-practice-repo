import React from "react";
import iconlist from "./assets/images/icon-list.svg";
import signupMobile from "./assets/images/illustration-sign-up-desktop.svg";
import styles from "./main-card.module.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

const MainCard = ({ setInputValue }) => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email must be valid email")
      .required("Email is required"),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/subscribe");
    setInputValue(formik.getFieldMeta("email").value);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-7 d-flex flex-column align-items-between justify-content-center ">
          <h1 className={styles.titleMain}>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <p>
            <img src={iconlist} alt="iconlist" /> Product discovery and building
            what matters
          </p>
          <p>
            <img src={iconlist} alt="iconlist" /> Measuring to ensure updates
            are a success
          </p>
          <p>
            <img src={iconlist} alt="iconlist" /> And much more!
          </p>

          <form className="my-4" noValidate onSubmit={formik.handleSubmit}>
            <label htmlFor="email" className="form-label fw-medium">
              Email address
            </label>
            <input
              type="email"
              name="email"
              // value={formik.values.email}
              // onChange={formik.handleChange}
              className={`form-control ${
                formik.errors.email ? "is-invalid" : ""
              }`}
              id="email"
              placeholder="email@company.com"
              {...formik.getFieldProps("email")}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <div class="invalid-feedback">{formik.errors.email}</div>

            <button className={styles.mainButton}>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

        <div className="col-5">
          <img src={signupMobile} alt="signup-mobile" />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
