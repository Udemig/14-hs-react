import Weather from "./components/Weather";

const App = () => (
  <main className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-800 text-white">
    <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]"
        aria-hidden="true"
      />
      <Weather />
    </div>
  </main>
);

export default App;
