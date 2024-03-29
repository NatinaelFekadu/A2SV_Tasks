"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      nameRef.current &&
      emailRef.current &&
      passwordRef.current &&
      confirmPasswordRef.current
    ) {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        toast.error("Passwords do not match", { theme: "colored", delay: 500 });
        return;
      }
      toast.loading("Registering...", { theme: "dark" });
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
        role: "customer",
      };
      const response = await fetch("https://akil-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.dismiss();
      const res = await response.json();
      if (response.ok) {
        router.push("/auth/verify-email?email=" + emailRef.current.value);
      } else {
        toast.error(res.message, { theme: "colored", delay: 500 });
      }
    }
  };
  return (
    <div className=" mx-auto mt-5 pb-10 px-6 sm:w-3/5">
      <h1 className="font-poppins font-black text-blue-950 text-3xl text-center">
        Sign Up Today!
      </h1>
      <div className="flex gap-2 justify-center p-2 border rounded-md w-1/2 mx-auto mt-7">
        <img src="/assets/google.svg" />
        <p className="font-epilogue font-bold text-blue-700">
          Sign Up with Google
        </p>
      </div>
      <div className="h-5 border-b text-center mt-7 w-2/3 mx-auto">
        <div className="pt-1.5">
          <span className="bg-white px-3 font-epilogue text-gray-400">
            Or Sign Up with Email
          </span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mx-auto max-w-md mt-8"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-md font-medium text-gray-600 dark:text-white"
          >
            Full Name
          </label>
          <input
            name="name"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Enter your full name"
            ref={nameRef}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-md font-medium text-gray-600 dark:text-white"
          >
            Email Adress
          </label>
          <input
            name="email"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="email"
            ref={emailRef}
            placeholder="Enter email address"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-1 text-md font-medium text-gray-600 dark:text-white"
          >
            Password
          </label>
          <input
            name="password"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-1 text-md font-medium text-gray-600 dark:text-white"
          >
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="password"
            placeholder="Enter password"
            ref={confirmPasswordRef}
          />
        </div>
        <button
          type="submit"
          className="text-white rounded-full bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md w-full sm:w-auto mt-3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Continue
        </button>
        <div className="flex gap-2">
          <p className="font-epiogue text-gray-500">Already have an account?</p>
          <Link href="login" className="text-indigo-800 font-semibold">
            Login
          </Link>
        </div>
        <p className="font-epilogue text-gray-500 text-sm">
          By clicking 'Continue', you acknowledge that you have read and
          accepted our{" "}
          <Link className="text-indigo-800" href="#">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-indigo-800" href="#">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}
