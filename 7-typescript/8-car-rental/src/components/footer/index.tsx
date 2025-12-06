import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="border-t text-white/90 glass-dark border-x-0! padding-x padding-y text-center">
      Tüm hakları saklıdır. &copy; CarHub {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
