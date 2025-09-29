import React from "react";

const Display = ({ count, increase }) => {
  console.log("Display component'ı render oldu");

  return (
    <div>
      <h2>Sayacın Değeri: {count}</h2>

      <button onClick={increase}>Arttır</button>
    </div>
  );
};

// Bu örnekte kapsayıcı olan SeconExa component'ın state'i her değiştiğinde kapsayıcının render olmasından kaynaklı Display component'ı değişen state'i kullanmasa bile gereksizz yere render oluyordur
// Bir component'ın aldığı prop'lar değişmediği müddetçe render olmasının önüne geçmek için React.memo() kullanırız
// Kapsayı elementin render olmasından kaynaklı alt elemetlerin gereksiz render oluşunu önler
export default React.memo(Display);
