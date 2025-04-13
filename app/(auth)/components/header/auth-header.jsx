import React from "react";

function AuthHeader({ text, subText }) {
  return (
    <header className="bg-c1 text-white pl-6 lg:pl-10 pt-20 pb-10 md:h-full md:flex-1 md:flex md:justify-center md:flex-col">
      <h3 className="text-4xl lg:text-6xl md:text-5xl">{text}</h3>
      <span className="opacity-75 text-lg lg:text-4xl md:text-2xl md:opacity-50">
        {subText}
      </span>
    </header>
  );
}

export default AuthHeader;
