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

## Dynamic Routes

- Sayfa içeriğinin url'deki parametreye göre dinamik olarak değişen detay sayfalarına dynamic routes adı verilir.
- Bu route'ları tanımlarken aldıkları parametreleri `:parametreİsmi` şeklinde tanımlarız.
- Component içerisinde bu url'deki parametreye erişmek için `useParams` hook'unu kullanırız
- Bu sayede youtube'un video sayfası, amazon'un ürün sayfası gibi içeriği dinamik olarak değişen detay sayfları oluşturabiliriz

## 404 Sayfası

- kullanıcı tanımlamadığımız route'lardan birine gitmeye çalıpşırsa ona 404 sayfası göstermek isteriz.
- 404 sayfası tanımlamak için route'ların altına path değeri olarak `*` 'a sahip olan yeni bir route oluştururuz.

## useNavigate()

- fonksiyon içerisinde link elementinin görevini yaparak kullanıcyı yönlendirmeye yarar
- kullanmak için öncelikle çağırıp kurulumunu yapmak gerekir

## Nested Routes

- Bir kapsayıcı route içerisinde başka rou'lar oluşturulamasına `Nested (İç İçe Routes)` denir.
- Bu özellik sayesinde sadece belirli sayfalara özel ortak elementler/özellikler eklenebilir.

## Outlet

- Kapsayıcı route içerisinde alt route'un elementini ekrana basmaya yarar

## SearchParams

- Url'de `?` işaretinin devamında yer alan `key=value` syntaxı ile tanımlanan değişkenelere Query / Search params denir.
- Genelde filtreleme veya detay sayfalarında kullanılır

## Filtrelemede State vs Param

- Projedeki herhangi bir filtreleme veya sıralamayı iki şekilde yöntebiliriz.

- Eğer state'i tercih edersek yapılan filtrleme sayfa yenilenince kaybolur ve başklarıyla paylaşılamaz

- Eğer param'ı tercih edersek yapılan filtreleme sayfa yenilense bile kalır ve parametrele url üzerinde saklanndığı için başkalarıyla paylaşılabilir

## useParams

- url'deki path parametrelerine erişmemizi sağlayan hook
- `const params = useParams()`

## useSearchParams

- url'deki query parametrelerine erişmemizi ve yönetmemizi sağlayan hook
- `const [searchParams,setSearchParams] = useSearchParams()`

## createBrowserRouter() & <BrowserRouter>

- Her iki yöntemde projedeki route'ları tanıtmak için kullanılabilir.
- createBrowserRouter yöntemi daha az kod'la aynı sonucu verebildiği için ve bir javascript verisi formatında olduğunadan büyük projelerde daha tercih edilen modern bir seçenektir

## useLocation

- kullanıcnın mevcut url'indeki bilgere erişmesini sağlayana hook
- `const location = useLocation()`
- `hash,pathname,search,state` değerlerini return eder

## Link veya useNavigate ile State Aktarma

- Kullanıcıyı bir sayfadan diğerine aktarırken berbaerinde göndermek istediğimiz bir veri varsa kullandığımız yöntemdir.
- `navigate("/not-found", { state: "Hata mesajı" })`
- `<Link to="/not-found" state="Hata mesajı">Not Found</Link>`
- State özelliğiyle aktarılen veriye diğer sayfada `useLocation` fonksiyonu aracılığıyla erişiriz
