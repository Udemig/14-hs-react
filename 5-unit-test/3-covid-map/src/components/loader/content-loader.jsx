const ContentLoader = () => {
  return (
    <div data-testid="loader" className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {new Array(9).fill("a").map((i, key) => (
        <div
          key={key}
          className="h-24 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl animate-pulse shadow-md"
        />
      ))}
    </div>
  );
};

export default ContentLoader;
