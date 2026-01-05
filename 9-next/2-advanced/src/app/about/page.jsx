// import { useState } from "react";

import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

const About = () => {
  console.log("Hakkımızda sayfası render oldu");

  return (
    <div className="space-y-10 border border-blue-500 p-10">
      <h1>Hakkımızda Sayfası</h1>

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>

      {/* <button onClick={() => alert("Selamlar")}>Bana Tıkla</button> */}
    </div>
  );
};

export default About;
