import React from "react";
import { RformData } from "./RformData";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export const schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  email: yup.string().email().required("email is Required"),
  phone: yup.number().required("phone is Required"),
  course: yup.string().required("Course is Required"),
  // date: yup.time().required("Tell me your time"),
  location: yup.string(),
  message: yup.string().required("Tell me your time"),
});
const MainForm = () => {
  return (
    <div className="border mt-10 p-4">
      <h1 className="text-pink-600 text-lg text-left mb-10">Enquiry Form</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          phone: "",
          course: "",
          date: "",
          location: "",
          message: "",
        }}
        validationSchema={schema}
        render={({ errors, touched, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {RformData?.map((val, i) => {
                return (
                  <div key={i} className='flex flex-col text-left mt-4'>
                    <label className="text-md mb-2">{val.label}</label>
                    <Field
                      type={val.type}
                      name={val.key}
                      className="border rounded-sm bg-stone-200 outline-none h-8"
                    />
                    <ErrorMessage
                      name={val.key}
                      component={"div"}
                      className="text-red-500"
                    />
                  </div>
                );
              })}
              <button type="submit" className="w-full mt-4 py-2 bg-pink-600">Sign in</button>

            </Form>
            
          );
        }}
      />
    </div>
  );
};

export default MainForm;
