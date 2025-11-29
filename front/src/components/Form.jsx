import React from "react";

function FormContact({ children, htmlFor, id, name, required, type }) {
  return (
    <>
      <lable htmlFor={htmlFor} className="block font-semibold mb-2">
        {children}
      </lable>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
    </>
  );
}

export default FormContact;
