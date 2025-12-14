import React from "react";

function FormText({
  children,
  htmlFor,
  id,
  name,
  value,
  onChange,
  required,
  type,
  ref,
  className = "",
  ...props
}) {
  return (
    <>
      <label htmlFor={htmlFor} className="block font-semibold mb-2">
        {children}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        required={required}
        {...props}
        ref={ref}
      />
    </>
  );
}

function FormTextrea({
  children,
  htmlFor,
  id,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <>
      <div>
        <label htmlFor={id} className="block font-semibold mb-2">
          {children}
        </label>

        <textarea
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          cols="40"
        ></textarea>
      </div>
    </>
  );
}

function ButtonForm({
  type,
  children,
  onClick,
  value,
  disabled,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      value={value}
      type={type}
      className={`bg-blue-700 hover:bg-blue-700/90 text-white font-bold py-2 px-4 rounded mt-4  ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default FormText;
export { FormTextrea, ButtonForm };
