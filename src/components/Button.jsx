import React from "react";


const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-lime-500 h-10 w-full rounded-md py-0 px-3 border-none cursor-pointer font-bold text-base text-stone-700 transition-all duration-500 ease-in-out hover:bg-stone-700 hover:text-lime-500    ">
      {children}
    </button>
  );
};

export default Button;
