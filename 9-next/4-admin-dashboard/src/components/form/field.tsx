import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
}

const Field: FC<Props> = ({ children, htmlFor, label }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="label">
        {label}
      </label>

      {children}
    </div>
  );
};

export default Field;
