"use client";

import React from "react";

function FormInput({ name, type, placeholder }) {
  return (
    <div className="my-7">
      <input
        name={name}
        className="input input-lg rounded-lg focus:outline-0 border-1 focus:ring-0 duration-150 focus:border-green-300 w-full"
        type={type || name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
