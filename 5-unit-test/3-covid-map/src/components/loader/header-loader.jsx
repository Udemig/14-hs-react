const HeaderLoader = () => {
  return (
    <div data-testid="loader" className="flex items-center gap-4">
      <div className="bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 h-10 w-[120px] rounded-xl animate-pulse shadow-md" />
      <div className="bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 h-10 w-16 rounded-xl animate-pulse shadow-md" />
    </div>
  );
};

export default HeaderLoader;
