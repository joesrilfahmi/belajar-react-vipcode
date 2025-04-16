import React from "react";

// konsep props
const Button = (props) => {
  // konsep desturucturing
  const { children = "...", classname = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
