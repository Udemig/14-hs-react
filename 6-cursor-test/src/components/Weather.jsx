import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "fd0fe0f92103bae8db715be9b2bfafa7";
const DEFAULT_CITY = "Istanbul";
const buildEndpoint = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`;

const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

const describeHumidity = (value = 0) => {
  if (value < 30) return "Dry air";
  if (value <= 60) return "Comfort zone";
  return "High humidity";
};

const describeWind = (speed = 0) => {
  if (speed < 0.5) return "Calm";
  if (speed < 3.4) return "Light breeze";
  if (speed < 8) return "Gentle breeze";
  return "Windy";
};

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState(DEFAULT_CITY);

  const fetchWeather = useCallback(async (targetCity = DEFAULT_CITY) => {
    const cityToFetch = targetCity.trim() || DEFAULT_CITY;

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(buildEndpoint(cityToFetch));

      setWeather({
        city: data.name,
        country: data.sys?.country,
        temperature: kelvinToCelsius(data.main?.temp),
        feelsLike: kelvinToCelsius(data.main?.feels_like),
        humidity: data.main?.humidity,
        windSpeed: data.wind?.speed,
        description: data.weather?.[0]?.description ?? "N/A",
        icon: data.weather?.[0]?.icon ?? "01d",
      });
    } catch (err) {
      console.error(err);
      setError(`Couldn't fetch weather for "${cityToFetch}". Try another city.`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  const handleSearch = useCallback(
    (event) => {
      event.preventDefault();
      fetchWeather(searchInput);
    },
    [fetchWeather, searchInput]
  );

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm tracking-[0.4em] text-white/70">LOADING</p>
          <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/30">
            <span className="block h-full w-1/2 animate-pulse rounded-full bg-white/80" />
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-base text-white/90">{error}</p>
          <button
            type="button"
            onClick={fetchWeather}
            className="rounded-full border border-white/60 bg-white/90 px-6 py-2 text-sm font-medium text-slate-900 transition hover:bg-white"
          >
            Try again
          </button>
        </div>
      );
    }

    if (!weather) return null;

    const humidityPercent = Math.max(0, Math.min(weather.humidity ?? 0, 100));
    const humidityStatus = describeHumidity(weather.humidity ?? 0);
    const windDescription = describeWind(weather.windSpeed ?? 0);
    const formattedWindSpeed = Number.isFinite(weather.windSpeed)
      ? weather.windSpeed.toFixed(1)
      : weather.windSpeed;

    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Now</p>
            <p className="text-3xl font-semibold text-white">
              {weather.city}, {weather.country}
            </p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            className="h-20 w-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
            loading="lazy"
          />
        </div>

        <div className="text-center">
          <p className="text-7xl font-semibold leading-none text-white drop-shadow-lg">
            {weather.temperature}°
          </p>
          <p className="mt-3 text-xl capitalize text-white/85">{weather.description}</p>
          <p className="text-sm text-white/70">
            Feels like {weather.feelsLike}° · Wind {weather.windSpeed} m/s
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 text-white sm:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-linear-to-br from-sky-500/20 via-transparent to-white/5 p-5 shadow-[0_20px_45px_rgba(6,24,44,0.35)] transition duration-300 hover:border-white/40 hover:bg-white/15">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3.25c-2.2 3.62-5.5 6.5-5.5 10.08A5.5 5.5 0 1 0 17.5 13.33C17.5 9.75 14.2 6.87 12 3.25Z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Humidity</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">{humidityStatus}</p>
              </div>
            </div>
            <div className="mt-5 flex items-baseline gap-2">
              <p className="text-4xl font-semibold">{weather.humidity}</p>
              <span className="text-lg text-white/70">%</span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/15">
              <span
                className="block h-full rounded-full bg-white/80"
                style={{ width: `${humidityPercent}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-white/70">Ideal indoor range is 30–60%.</p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-linear-to-br from-indigo-500/25 via-transparent to-white/5 p-5 shadow-[0_20px_45px_rgba(2,6,23,0.45)] transition duration-300 hover:border-white/40 hover:bg-white/15">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h13.5a2.5 2.5 0 0 0 0-5H17"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 12h15.5a2.5 2.5 0 1 1 0 5H14"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h10.5a2.5 2.5 0 1 1 0 5H16" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Wind</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">{windDescription}</p>
              </div>
            </div>
            <div className="mt-5 flex items-baseline gap-2">
              <p className="text-4xl font-semibold">{formattedWindSpeed}</p>
              <span className="text-lg text-white/70">m/s</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h10.5a3.5 3.5 0 1 1 0 7H11"
                />
              </svg>
              <p className="capitalize">Feels {windDescription.toLowerCase()} outside.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full max-w-md text-white">
      <div className="relative overflow-hidden rounded-[34px] border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-2xl">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-8">
          <form onSubmit={handleSearch} className="flex items-center gap-3 rounded-full border border-white/40 bg-white/15 p-1.5 pl-5">
            <label htmlFor="city-search" className="sr-only">
              Şehir Ara
            </label>
            <input
              id="city-search"
              type="search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search city (e.g. Paris)"
              className="flex-1 bg-transparent text-white placeholder-white/60 outline-none"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              Search
            </button>
          </form>
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Weather;

