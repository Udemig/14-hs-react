const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Crypto Tracker. Eğitim amaçlı proje</p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 space-x-3">
            <span>API: CoinGecko</span> <span>•</span> <span>React + TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
