import React from "react";

function FormLoader() {
  return (
    <div className="animate-fadein z-40 absolute inset-0">
      <div className="flex justify-center items-center  absolute bg-white/30 inset-0">
        <span className="loading text-c2 loading-spinner loading-xl"></span>
      </div>
    </div>
  );
}

export default FormLoader;
