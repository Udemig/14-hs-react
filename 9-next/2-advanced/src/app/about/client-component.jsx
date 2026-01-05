"use client";

const ClientComponent = ({ children }) => {
  return (
    <div className="p-10 border-2 border-red-500 my-10">
      <h1>ClientComponent</h1>

      {children}
    </div>
  );
};

export default ClientComponent;
