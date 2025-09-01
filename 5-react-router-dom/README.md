# React Router Dom

- react-router-dom, react uyugulamarında sayfalar yani rotalar arasında geçiş yapmanızı sağlayan bir kütüphanedir.
- SPA(Single Page Application) URL değiştiğinde sayfa yeniden yüklenmeden içeriğinin güncellenmesini sağlar

## Kurulum

1. Pakedi dahil et

- `npm i react-router-dom`

2. app.jsx içerisinde import et
   `import {BrowserRouter, Routes, Route} from "react-router-dom"`

## Router Dom Elementleri

- BrowserRouter: Uygulamanın router (yönlendirme) sistemini başlatır

- Routes: Tüm route bileşenlerini kapsar, her url değiştiğinde uygun route'u bulup gösterir. Sadece ilk işleşen route'u gösterir

- Route: bir url ile eşleştiğinde hangi bileşnin gösterileceğini belirler

- Link: Proje içerisindeki sayfalar arasında geçiş işlemini SPA'a uygun şekilde gerçekleştirir. Link kullandığımız zaman DOM'a `<a></a>` etiketi basılır

- NavLink: Link component'ı ile aynı görevi yapar. Link'ten farklı olarak kullancının bulunduğu sayfanın linkine active class'ı verir

## Parametre Tanımı

- React Router Dom'da bir route'u tanımlarken eğerki o route bir parametre alıyor bu parametreyi `:parametreİsmi` ifadesiyle tanımlarız
