"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./custom.module.css";

export default function VerifyEmail() {
  const otpInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [enableButton, setEnableButton] = useState(false);
  const code1 = useRef<HTMLInputElement>(null);
  const code2 = useRef<HTMLInputElement>(null);
  const code3 = useRef<HTMLInputElement>(null);
  const code4 = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  console.log(searchParams.get("email"));

  const handleCodeInput = (e: FormEvent<HTMLInputElement>) => {
    if (
      code1.current!.value &&
      code2.current!.value &&
      code3.current!.value &&
      code4.current!.value
    ) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.loading("Verifying...", { theme: "dark" });
    const response = await fetch(
      "https://akil-backend.onrender.com/verify-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otp: `${code1.current!.value}${code2.current!.value}${
            code3.current!.value
          }${code4.current!.value}`,
          email: searchParams.get("email"),
        }),
      }
    );
    toast.dismiss();
    if (response.ok) {
      router.push("/auth/login");
    } else {
      toast.error("Invalid OTP", { theme: "colored", delay: 500 });
    }
  };

  return (
    <div className="mx-auto flex-col items-center mt-5 pb-10 sm:w-1/3">
      <h1 className="font-poppins font-black text-blue-950 text-3xl text-center">
        Verify Email
      </h1>
      <p className="font-epilogue mt-10 sm:pl-10 text-start text-gray-500 text-sm">
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex mt-5 gap-6 justify-center">
          <input
            type="number"
            className={`w-16 h-11 mx-1 text-2xl  text-center border-2 border-indigo-300 rounded-lg ${classes.remove_arrow}`}
            maxLength={1}
            ref={code1}
            onChange={handleCodeInput}
          />
          <input
            type="number"
            className={`w-16 h-11 mx-1 text-2xl  text-center border-2 border-indigo-300 rounded-lg ${classes.remove_arrow}`}
            maxLength={1}
            ref={code2}
            onChange={handleCodeInput}
          />
          <input
            type="number"
            className={`w-16 h-11 mx-1 text-2xl  text-center border-2 border-indigo-300 rounded-lg ${classes.remove_arrow}`}
            maxLength={1}
            ref={code3}
            onChange={handleCodeInput}
          />
          <input
            type="number"
            className={`w-16 h-11 mx-1 text-2xl  text-center border-2 border-indigo-300 rounded-lg ${classes.remove_arrow}`}
            maxLength={1}
            ref={code4}
            onChange={handleCodeInput}
          />
        </div>
        <p className="font-epilogue mt-10 sm:pl-10 mx-auto text-center text-sm w-80 pr-7 text-gray-500">
          You can request to{" "}
          <span className="text-indigo-800 font-semibold">Resend code </span>
          in <span className="text-indigo-800 font-semibold">0:30</span>
        </p>
        <button
          type="submit"
          className="text-white rounded-full ml-10 disabled:bg-indigo-300 disabled:cursor-not-allowed  bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md w-5/6 mt-7 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={enableButton ? false : true}
        >
          Continue
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
