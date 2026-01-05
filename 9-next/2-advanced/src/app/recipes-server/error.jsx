"use client";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
