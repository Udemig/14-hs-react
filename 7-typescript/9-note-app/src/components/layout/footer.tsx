import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-auto bg-card border-t border-border">
      <div className="container py-4 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} NotApp - Modern Note Uygulaması
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
