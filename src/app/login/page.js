"use client";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
const page = () => {
  const { mutate, isPending, isError, isSuccess } = useMutation();
  const registerSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <div className="wrapper">
      <div className="sub_wrapper">
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />

          <div className="register-link">
            Don't have an account? <Link href="/register">Register</Link>
          </div>
          <button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
