/*
 ! Component (Bileşen)
 * React'ın temel yapı taşıdır.
 * React uygulması yadığımız component'ların birleştirilimesiyle oluşur.
 * Herhangi bir projeyi yapboz olarak düşündüğümüzde yapbozun her bir parçası bizim bir bileşenimize denk gelir
  
 ! Component'ın Temel Özellekleri 
 * Her component aslında bir javascript fonksiyonudur
 * Her component JSX (HTML benzeri) kod return eder
 * Aynı component'ı birden fazla yerde kullanabiliriz
 * Her compeonent kendi dosyası olur
  
 ! Bir fonksiyonun component olması için
 * JSX kodu return etmeli
 * İsmi büyük harfle başlamlı 
 * Component kullanmak için export ederiz
*/

function Header() {
  // return satırının içerisinde sadece tek bir parent element olmalı
  // fragment (boş etiket): <></>
  // fragment kullanarak bu tek parant olmalı sorununu çözeriz
  return (
    <>
      <header>
        <h1>Udemig</h1>

        <nav>
          <a href="/">Anasayfa</a>
          <a href="/">Hakkımızda</a>
          <a href="/">İletişim</a>
        </nav>

        <div>
          <button>Giriş Yap</button>
          <button>Kayıt Ol</button>
        </div>
      </header>

      <section className="header-bottom">
        <button>Elektronik</button>
        <button>Giyim</button>
        <button>Eğlence</button>
        <button>Oyun Spor</button>
      </section>
    </>
  );
}

export default Header;
