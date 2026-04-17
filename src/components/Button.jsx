import React from "react";

const Button = ({children}) => {
  return (
    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition">
      {children}
    </button>
  );
};

export default Button;
