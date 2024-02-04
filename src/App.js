import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import './App.css';


const validationSchema = yup.object({
  name: yup.string().min(2).max(25).required("Name is Required"),
  phone: yup.string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
  password: yup.string().max(6).required("Password is required"),
  gender: yup.string().required("Gender is Required"),
  date: yup.date().required("Date of Birth is Required"),
  income: yup.number().required("Income is Required").positive("Income must be positive"),
});
const initialValues = { name: "", phone: "", password: "", gender: "", date: "", income: "" }


const Registration = () => {

  return (
    <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)

      }}>

      {({ values, errors, touched, handleBlur, onChange }) => (

        <div className="container">
          <Form>
          
            <div>
                <h2 className="heading">Registration Form</h2>
              <label>Name: </label>
              <Field name="name" type="text" onBlur={handleBlur}  placeholder="Your Name"
                className={`input ${errors.name && touched.name ? "border-danger" : ""}`} />
              <br />
              <ErrorMessage name="name" component="div" className="error-text" />
            </div>

            <div>
              <label>Phone: </label>
              <Field name="phone" type="number" onBlur={handleBlur} placeholder="  Your Phone Number"
                className={`input ${errors.phone && touched.phone? "border-danger" : ""}`} />
              <br />
              <ErrorMessage name="phone" component="div" className="error-text" />
            </div>

            <div>
              <label>Password:</label>
              <Field name="password" type="password" onBlur={handleBlur} placeholder="Password"
                className={`input ${errors.password && touched.password? "border-danger" : ""}`} />
              <br />
              <ErrorMessage name="password" component="div" className="error-text" />
            </div>
             

            <div>
              <label>Gender: </label>
              <br />
              <span className="input">
                <Field type="radio" name="gender" value="male" onBlur={handleBlur} /> Male
              </span>
              <span className="input">
                <Field type="radio" name="gender" value="female"  /> Female
              </span>
              <br />
              <ErrorMessage name="gender" component="div" className="error-text" />
            </div>

            <div>
              <label>Date:</label>
              <Field name="date" type="date" onBlur={handleBlur}
                className={`input ${errors.date && touched.date? "border-danger" : ""}`} />
              <br />
              <ErrorMessage name="date" component="div" className="error-text" />
            </div>

            <div>
              <label>Income: </label>
              <Field className="input" as="select" name="income" value={values.income} >
                <option value="0">Rs. 0</option>
                <option value="1000">Rs. 1000</option>
                <option value="10000">Rs. 10000</option>
              </Field>
              <br />
              <ErrorMessage name="income" component="div" className="error-text" />
            </div>

            <div>
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </div>

      )}


    </Formik>
  );
};

export default Registration;
