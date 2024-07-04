"use client";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
const page = () => {
  const { mutate, isPending, isError, isSuccess } = useMutation();
  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <div className="wrapper">
      <div className="sub_wrapper">
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />
          <span>{formik.errors.name}</span>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <span>{formik.errors.email}</span>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
          <span>{formik.errors.password}</span>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            required
            placeholder="Confirm your password"
          />
          <span>{formik.errors.confirm_password}</span>
          <div className="register-link">
            Already have an account? <Link href="/login">Login</Link>
          </div>
          <button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
