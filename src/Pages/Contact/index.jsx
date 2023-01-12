import { ErrorMessage, Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import './index.scss'


function Contact() {
  return (
    <>
    <Navbar></Navbar>
    <div className='AllDiv'>
    <h1>Let's Get In Touch!</h1>
    <p>Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
    <Formik
      initialValues={{ fullName:'', email: '', password: '' ,email: '' ,phoneNumber:'',  message:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting },actions) => {
        {console.log(values, actions)}
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="fullName" placeholder='Full Name' />
          <Field type="email" name="email" placeholder='Email' />
          <ErrorMessage name="email" component="div"/>
          <Field type="password" name="password" placeholder='Password'/>
          <ErrorMessage name="password" component="div" />
          <Field name="phoneNumber" type='phone' placeholder='Phone Number' />
          <Field name="message" placeholder='Message'/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
    </>
  )
}

export default Contact