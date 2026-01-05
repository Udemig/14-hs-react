"use client";

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");

  console.log("İletişim sayfası render oldu");

  return (
    <div className="space-y-10 border border-red-500 p-10">
      <h1>İletişim Sayfası</h1>

      <button onClick={() => alert("Selamlar")}>Bana Tıkla</button>
    </div>
  );
};

export default Contact;
