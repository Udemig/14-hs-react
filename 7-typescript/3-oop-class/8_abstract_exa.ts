// Soyut sınıf
abstract class MuzikCalar {
  constructor(public apiUrl: string) {}

  muzikleriGetir(): void {
    console.log(this.apiUrl + "adresinden müzikler alındı");
  }

  abstract muzikCal(isim: string): void;
}

// Soyut sınıfı miras alan sınıf
class Spotify extends MuzikCalar {
  muzikCal(isim: string): void {
    console.log(isim + " müziği spotify'da çalıyor");
  }
}

// Soyut sınıfı miras alan sınıf
class AppleMusic extends MuzikCalar {
  muzikCal(isim: string): void {
    console.log(isim + "şarkısı apple music'de çalıyor");
  }
}

const spotify = new Spotify("https://spotify.api.com");
const appleMusic = new AppleMusic("https://api.apple.com");

spotify.muzikleriGetir();
appleMusic.muzikleriGetir();

spotify.muzikCal("yüz yüze");
appleMusic.muzikCal("yüz yüze");
