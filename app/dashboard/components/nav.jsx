"use client";

import { BellSnoozeIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import Dock from "./dock";

const MainNav = () => (
  <div className="navbar justify-between relative bg-base-100 z-40 shadow-sm">
    <div className=" pl-2 flex-1">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-8 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl font-bold">Hi, Tristan</a>
    </div>
    <Dock
      className={
        "flex-1 hidden sm:flex justify-center items-center h-full gap-14"
      }
    />
    <div className="flex justify-end flex-1">
      <button className="btn btn-ghost btn-circle">
        <BellSnoozeIcon className="size-7" />
      </button>
    </div>
  </div>
);

function Nav() {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (document.getElementById("nav")) {
        if (
          window.scrollY > 159 &&
          !document.getElementById("nav").classList.contains("active")
        ) {
          document.getElementById("nav").classList.add("active");
        } else if (
          window.scrollY < 160 &&
          document.getElementById("nav").classList.contains("active")
        ) {
          document.getElementById("nav").classList.remove("active");
        }
      }
    });
  }, []);

  return (
    <>
      <MainNav />
      <div
        id="nav"
        className="z-40 duration-200 -translate-y-full fixed inset-x-0 top-0"
      >
        <MainNav />
      </div>
    </>
  );
}

export default Nav;
