import React from "react";

function FormButton({ className, text }) {
  return (
    <button className={`${className} btn w-full bg-c2 text-white btn-lg`}>
      {text}
    </button>
  );
}

export default FormButton;
