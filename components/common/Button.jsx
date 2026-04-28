import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`font-jost font-medium text-lg text-white p-1.25 bg-secondary cursor-pointer ${className}`}
    >
      <p className="border border-amber-50 py-3.25 px-9.75 ">{btnText}</p>
    </button>
  );
};

export default Button;
