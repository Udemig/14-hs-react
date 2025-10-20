import { divIcon } from "leaflet";

export const getIcon = (direction, isActive, isDetailMode) => {
  return divIcon({
    html: `
        <div style="transform: rotate(${direction - 45}deg)">
            <img src="/plane.svg" width="30px" height="30px"/>
        </div>
        `,
    iconSize: [30, 30],
    className: `marker ${isDetailMode && "passive-flight"} ${isActive && "active-flight"}`,
  });
};

export const formatDate = (unixTime) => {
  // değer yoksa null dö
  if (!unixTime || unixTime === 0) return null;

  // saniye formatındaki veriyi milisaniye formatında çevir
  const formatted = new Date(unixTime * 1000);

  // kullanıcı dostur formata çevir
  return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
