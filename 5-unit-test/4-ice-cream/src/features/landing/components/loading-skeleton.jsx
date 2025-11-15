const LoadingSkeleton = () => (
  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="flex flex-col gap-6 rounded-3xl bg-white/10 p-6 animate-pulse"
      >
        <div className="flex justify-center">
          <div className="h-28 w-28 rounded-3xl bg-white/20" />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <div className="mx-auto h-6 w-32 rounded-lg bg-white/20" />
          <div className="mx-auto h-4 w-20 rounded-lg bg-white/20" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="mx-auto h-4 w-28 rounded-lg bg-white/20" />
          <div className="flex gap-3">
            <div className="h-10 flex-1 rounded-full bg-white/20" />
            <div className="h-10 flex-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default LoadingSkeleton;
