"use client";

import FormButton from "../components/button/form-button";
import FormInput from "../components/input/form-input";
import FormLoader from "../components/loaders/form-loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitAction = async (formData) => {
    setLoading(true);
    const password = formData.get("password");
    const email = formData.get("email");

    console.log(password, email);

    router.push("/dashboard");
  };

  return (
    <>
      {loading && <FormLoader />}
      <div className="md:flex md:h-screen">
        <div className="hero h-[30vh] md:h-full md:flex-1">
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Some image</h1>
            </div>
          </div>
        </div>
        <div className="w-full px-5 sm:px-14 py-6 md:px-8 md:w-md md:pt-30 md:h-screen md:overflow-scroll">
          <h2 className="text-lg md:text-2xl md:text-c1">
            Login to your account
          </h2>
          <form action={submitAction} className="w-full">
            <FormInput name={"email"} placeholder={"Your email"} />
            <FormInput name={"password"} placeholder={"Your pasword"} />
            <FormButton text={"Sign in"} />
          </form>
          <div className="px-5 mt-2 text-center">
            Forgotten password?{" "}
            <Link
              onClick={() => setLoading(true)}
              href={"/forgotpassword"}
              className="text-c2"
            >
              Reset
            </Link>
          </div>
          <div className="text-center flex gap-3 my-8 w-4/5 mx-auto items-center">
            <hr className="flex-[1] border-0 h-1 rounded-2xl bg-black/10" />
            <span className="font-bold">Or</span>
            <hr className="flex-[1] border-0 h-1 rounded-2xl bg-black/10" />
          </div>
          <button className="btn btn-lg mb-3 w-full bg-c1 text-white">
            <svg
              width="22"
              height="22"
              viewBox="-3 0 262 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            Sign in with google
          </button>
          <button className="btn btn-lg my-3 w-full border-1 border-c1/30 ">
            <svg
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.522 44.5217H489.739V489.739H44.522V44.5217Z"
                fill="#F35325"
              />
              <path
                d="M534.261 44.5217H979.478V489.739H534.261V44.5217Z"
                fill="#81BC06"
              />
              <path
                d="M44.522 534.261H489.739V979.478H44.522V534.261Z"
                fill="#05A6F0"
              />
              <path
                d="M534.261 534.261H979.478V979.478H534.261V534.261Z"
                fill="#FFBA08"
              />
            </svg>
            Sign in with Microsoft
          </button>
          <div className="px-5 text-center">
            Don't have an accouunt?{" "}
            <Link
              onClick={() => setLoading(true)}
              href={"/register"}
              className="text-c2"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
