import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-10 p-4 border-b border-zinc-500 text-lg">
      <h1>NEXT</h1>

      <nav className="flex items-center gap-4">
        <Link href="/">Anasayfa</Link>
        <Link href="/products">Ürünler</Link>
        <Link href="/profile">Profil</Link>
        <Link href="/login">Giriş Yap</Link>
      </nav>
    </header>
  );
};

export default Header;
