"use client";

import FormButton from "../components/button/form-button";
import AuthHeader from "../components/header/auth-header";
import FormInput from "../components/input/form-input";
import FormLoader from "../components/loaders/form-loader";
import { EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);

  const submitAction = async (formData) => {
    const email = formData.get("email");
    setLoading(true);

    console.log(email);

    setTimeout(() => {
      setLoading(false);
      document.getElementById("my_modal_2").showModal();
    }, 3000);
  };

  return (
    <>
      {loading && <FormLoader />}
      <div className="md:flex md:h-screen">
        <AuthHeader
          text={"Forgot Password"}
          subText={"Enter your email account to reset password"}
        />
        <form
          action={submitAction}
          className="w-full px-5 py-6 sm:px-14 md:px-8 md:w-md md:pt-30 md:h-screen md:overflow-scroll"
        >
          <FormInput name={"email"} placeholder={"Email Address"} />
          <FormButton text={"Continue"} />
        </form>
      </div>

      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center rounded-t-4xl sm:rounded-b-4xl flex flex-col justify-center items-center  overflow-visible relative">
          <span className="size-20 text-white fx p-6  rounded-3xl bg-c1 absolute -top-[40px]">
            <EnvelopeOpenIcon />
          </span>
          <h3 className="font-bold text-3xl pt-9">Check your email</h3>
          <p className="py-4">
            We have sent an instruction to your mailbox to rcover the password
            to your account
          </p>
          <form method="dialog" className="w-full">
            <Link href={"/"}>
              <FormButton text={"Done"} className={"mt-5 "} />
            </Link>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ForgotPassword;
