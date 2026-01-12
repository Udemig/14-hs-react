import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-green-900 text-white p-5 text-center">
      Manav Market &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.
    </footer>
  );
};

export default Footer;
