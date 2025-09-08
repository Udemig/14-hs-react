import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // sayacı başlat
  const startTimer = () => {
    // devamEdiyorMu değerini true'ya çektik
    setIsRunning(true);

    // her saniye seconds değerini 1 arttır
    // intervalId değerini useRef ile tutuğumuz referans'a atıyoruz
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // sayacı durdur
  const stopTimer = () => {
    // devamEdiyorMu değerini false'a çektik
    setIsRunning(false);
    // interval'ı durdurur (useRef ile tutulan intervalId'sine eriştik)
    clearInterval(intervalRef.current);
  };

  // sayacı temizle
  const clearTimer = () => {
    stopTimer(); // sayacı durdur
    setSeconds(0); // saniye değerini 0'a düşür
  };

  // component ekrandan ayrılınca sayacı temizle
  useEffect(() => {
    // component ekrana gelince:

    // component ekrandan gidince:
    return () => clearTimer();
  }, []);

  return (
    <div className="my-5">
      <h3>Örnek - 4: Değer Tutma</h3>
      <p>
        <b>Açıklama: </b> Kronotmetre
      </p>

      <div className="my-3">
        ⏰{" "}
        <strong>
          {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, "0")}
        </strong>
      </div>

      <div>
        <button disabled={isRunning} className="btn btn-primary" onClick={startTimer}>
          {isRunning ? "Çalışıyor..." : "Başlat"}
        </button>
        <button className="btn btn-danger ms-2" onClick={stopTimer}>
          Durdur
        </button>
        <button className="btn btn-warning ms-2" onClick={clearTimer}>
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Timer;
