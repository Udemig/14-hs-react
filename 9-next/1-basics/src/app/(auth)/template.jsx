"use client";

import Link from "next/link";
import { useState } from "react";

// Layout component'ları HOC türündedir
// Ekrana basılacak olan sayfası children propu ile alır
const Template = ({ children }) => {
  const [name, setName] = useState();

  // layout'lar yetkilendirme amacıyla da kullanılabilir
  if ("admin değilse") {
    // dışarıya yönlendir
  }

  return (
    <div className="page flex max-md:flex-col text-xl gap-10">
      <aside className="border border-zinc-500 flex flex-col gap-5 p-5 rounded-md">
        <h1>Selam, {name}</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-1 px-4"
          placeholder="isminiz.."
        />

        <Link href="/login">Giriş Yap</Link>
        <Link href="/register">Kayıt Ol</Link>
      </aside>

      {children}
    </div>
  );
};

export default Template;
