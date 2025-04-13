"use client";

import FormButton from "../components/button/form-button";
import AuthHeader from "../components/header/auth-header";
import FormInput from "../components/input/form-input";
import FormLoader from "../components/loaders/form-loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Register() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitAction = async (formData) => {
    const password = formData.get("password");
    const email = formData.get("email");
    const confirmpassword = formData.get("confirmpassword");
    const firstname = formData.get("firstname");
    const lastname = formData.get("email");

    console.log(password, email, confirmpassword, firstname, lastname);

    setLoading(true);

    router.push("/dashboard");
  };

  return (
    <>
      {loading && <FormLoader />}
      <div className="md:flex md:h-screen">
        <AuthHeader text={"Register"} subText={"Create your account"} />
        <form
          action={submitAction}
          className="w-full px-5 py-6 sm:px-14 md:px-8 md:w-md md:pt-30 md:h-screen md:overflow-scroll"
        >
          <FormInput
            name={"firstname"}
            type={"text"}
            placeholder={"FirstName"}
          />
          <FormInput name={"lastname"} type={"text"} placeholder={"LastName"} />
          <FormInput name={"email"} placeholder={"Email Address"} />
          <FormInput name={"password"} placeholder={"Password"} />
          <FormInput
            name={"confirmpassword"}
            type={"password"}
            placeholder={"Confirm password"}
          />
          <FormButton text={"Register"} />
          <div className="px-5 text-center mt-5">
            Already have an accouunt?{" "}
            <Link
              onClick={() => setLoading(true)}
              href={"/"}
              className="text-c2"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
