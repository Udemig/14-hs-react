import { ErrorMessage, Field } from "formik";
import type { FC } from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}

const Input: FC<Props> = ({ label, name, type = "text", required = true }) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm/6 font-semibold text-gray-900">
        {label}

        {required && <span className="text-red-500 ms-1">*</span>}
      </label>

      <div>
        <Field
          type={type}
          name={name}
          required={required}
          className={`rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-indigo-600 sm:text-sm/6 ${
            type !== "checkbox"
              ? "outline-1 -outline-offset-1 outline-gray-300 w-full"
              : "size-5 ms-1"
          }`}
        />

        <ErrorMessage
          name={name}
          component="div"
          className="absolute bottom-[-20px] left-0 text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default Input;
