"use client";

import { FormEvent, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Form() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    console.log(emailRef.current.value, passwordRef.current.value);

    toast.loading("Logging in...", { theme: "dark" });
    const response = await signIn("credentials", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      redirect: false,
    });

    toast.dismiss();
    if (response?.ok) {
      router.push("/JobsList");
    } else {
      let message = response?.error;
      if (message === "CredentialsSignin") {
        message = "Invalid Credentials";
      }
      toast.error(message, { theme: "colored", delay: 500 });
    }
  };
  return (
    <div className="mx-auto mt-10 pt-5 pb-10 px-6 sm:w-3/5">
      <h1 className="font-poppins font-black p-3 text-3xl text-center ">
        Welcome Back,
      </h1>
      <div className="h-5 border-b text-center w-2/3 mx-auto">
        <div>
          <span className="bg-white px-32 font-epilogue text-white"></span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mx-auto mt-8 max-w-md"
      >
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
            placeholder="Enter email address"
            ref={emailRef}
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
        <button
          type="submit"
          className="text-white rounded-full bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md w-full sm:w-auto mt-3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className="flex gap-3">
          <p className="font-epiogue text-gray-500">Don't have an account?</p>
          <Link href="signup" className="text-indigo-800 font-semibold">
            Signup
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
