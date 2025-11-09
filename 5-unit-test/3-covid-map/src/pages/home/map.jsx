import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { mapStyles } from "../../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  return (
    <div className="container p-0 mt-14 mb-20">
      <h1 className="px-5 pb-6 text-3xl font-bold bg-linear-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
        Ülke Seçiniz
      </h1>

      <div className="px-5 mb-4 min-h-8">
        {hoveredCountry && (
          <p className="text-xl font-semibold text-gray-700 transition-all duration-300">{hoveredCountry}</p>
        )}
      </div>

      <div className="border border-white/30 shadow-md md:rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden backdrop-blur-sm">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={mapStyles}
                    onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onClick={() => navigate(`/country/${geo.properties.name}`)}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
