"use client";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId, useState } from "react";
import DatePicker from "react-datepicker";
import css from "./BookingForm.module.css";

const BookingFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Must be at least 3 characters long")
    .max(32, "Maximum number of characters: 32")
    .required(),
  email: Yup.string().email("Incorrect email address").required(),
  bookDate: Yup.date()
    .nullable()
    .min(new Date(), "Select the correct date")
    .required(),
  comment: Yup.string().max(500, "Maximum number of characters exceeded"),
});

const BookingForm = () => {
  const fielId = useId();
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className={css.bookingFrom}>
      <h2 className={css.book}>Book your campervan now</h2>
      <p className={css.help}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          username: "",
          email: "",
          bookDate: null,
          comment: "",
        }}
        validationSchema={BookingFormSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          setStartDate(null);
        }}
      >
        {({ setFieldValue, errors, touched, handleSubmit }) => (
          <Form>
            <Field
              type="text"
              name="username"
              id={`${fielId}-username`}
              placeholder="Name"
              className={`${css.formInput} ${touched.username && errors.username ? css.inputError : ""}`}
            />
            {touched.username && errors.username && (
              <div>{errors.username}</div>
            )}

            <Field
              type="email"
              name="email"
              id={`${fielId}-email`}
              placeholder="Email"
              className={`${css.formInput} ${touched.email && errors.email ? css.inputError : ""}`}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setFieldValue("bookDate", date);
              }}
              dateFormat="MM.dd.yyyy"
              placeholderText="Booking date"
              className={`${css.formInput} ${touched.bookDate && errors.bookDate ? css.inputError : ""}`}
            />
            {touched.bookDate && errors.bookDate && (
              <div>{errors.bookDate}</div>
            )}

            <Field
              as="textarea"
              name="comment"
              id={`${fielId}-comment`}
              placeholder="Comment"
              className={`${css.formInput} ${touched.comment && errors.comment ? css.inputError : ""}`}
            />
            {touched.comment && errors.comment && <div>{errors.comment}</div>}

            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
              className={css.btnSend}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
