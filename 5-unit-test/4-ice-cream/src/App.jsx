import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <main className="design-card">
        <header className="hero">
          <div className="hero-icon">􀣺</div>
          <h1>iOS 26 Design System</h1>
          <p>Sade, ferah ve minimal Apple estetiği</p>
        </header>

        <section className="feature-section">
          <h2>Buton Stilleri</h2>
          <div className="actions">
            <button className="apple-button apple-button--filled">
              <span className="button-icon">􀊄</span>
              Primary Action
            </button>
            <button className="apple-button apple-button--soft">
              <span className="button-icon">􀈖</span>
              Secondary
            </button>
            <button className="apple-button apple-button--outline">
              <span className="button-icon">􀍟</span>
              Outline
            </button>
          </div>
        </section>

        <section className="feature-section">
          <h2>Kart Bileşenleri</h2>
          <div className="card-grid">
            <div className="ios-card">
              <div className="card-icon blue">􀌤</div>
              <h3>Mesajlar</h3>
              <p>Yeni bir mesaj gönderin</p>
            </div>
            <div className="ios-card">
              <div className="card-icon green">􀎫</div>
              <h3>FaceTime</h3>
              <p>Görüntülü arama başlatın</p>
            </div>
            <div className="ios-card">
              <div className="card-icon orange">􀋒</div>
              <h3>Müzik</h3>
              <p>Favori şarkılarınız</p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Liste Öğeleri</h2>
          <div className="ios-list">
            <div className="list-item">
              <div className="list-icon purple">􀉆</div>
              <div className="list-content">
                <div className="list-title">Bildirimler</div>
                <div className="list-subtitle">Bildirimleri yönetin</div>
              </div>
              <div className="list-chevron">􀆊</div>
            </div>
            <div className="list-item">
              <div className="list-icon pink">􀎔</div>
              <div className="list-content">
                <div className="list-title">Gizlilik</div>
                <div className="list-subtitle">Gizlilik ayarları</div>
              </div>
              <div className="list-chevron">􀆊</div>
            </div>
            <div className="list-item">
              <div className="list-icon indigo">􀍟</div>
              <div className="list-content">
                <div className="list-title">Genel</div>
                <div className="list-subtitle">Sistem ayarları</div>
              </div>
              <div className="list-chevron">􀆊</div>
            </div>
          </div>
        </section>

        <footer className="app-footer">
          <p>Apple iOS 26 • Modern Tasarım Dili</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
