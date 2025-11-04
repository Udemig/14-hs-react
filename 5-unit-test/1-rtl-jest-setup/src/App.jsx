import React, { useState } from "react";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("");

  const handlePrimaryClick = () => {
    setClickCount((prev) => prev + 1);
    setMessage("Primary butona tıkladınız! 👍");
  };

  const handleSecondaryClick = () => {
    setMessage("Secondary butona tıkladınız! ✨");
  };

  const handleDangerClick = () => {
    setClickCount(0);
    setMessage("Sayaç sıfırlandı! 🔄");
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🧪 React Unit Testing Öğrenme Projesi</h1>
        <p>Jest ve React Testing Library ile test yazmayı öğrenin</p>
      </header>

      <main className="app-content">
        <section className="demo-section">
          <h2>Button Component Demo</h2>
          <p className="description">
            Bu proje, React component'lerinde unit test yazmayı öğrenmek için
            hazırlanmış bir örnektir.
            <code>src/__tests__/Button.test.jsx</code> dosyasını inceleyerek
            test örneklerini görebilirsiniz.
          </p>

          <div className="button-group">
            <Button
              label="Primary Button"
              variant="primary"
              onClick={handlePrimaryClick}
            />
            <Button
              label="Secondary Button"
              variant="secondary"
              onClick={handleSecondaryClick}
            />
            <Button
              label="Danger Button"
              variant="danger"
              onClick={handleDangerClick}
            />
            <Button label="Disabled Button" variant="primary" disabled={true} />
          </div>

          {message && <div className="message-box">{message}</div>}

          <div className="counter">
            <strong>Tıklama Sayısı:</strong> {clickCount}
          </div>
        </section>

        <section className="info-section">
          <h3>📚 Test Komutları</h3>
          <div className="command-list">
            <div className="command-item">
              <code>npm test</code>
              <span>Testleri çalıştırır</span>
            </div>
            <div className="command-item">
              <code>npm test -- --coverage</code>
              <span>Coverage raporu ile testleri çalıştırır</span>
            </div>
            <div className="command-item">
              <code>npm test -- --watch</code>
              <span>Watch modunda testleri çalıştırır</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
