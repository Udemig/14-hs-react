# Resim

- Eğer resimleri public klasörü içerisine koyarsak doğrudan url üzeirnden yayınlandığı için resmin url'i üzerinden ekrana basılabilir

- Eğer resimleri src klasörü içerisine koyarsak resmi kullanabilmek için önce import ermek gerekir

# Component Türleri

- React'da 2 farklı component türü bulunur

1. Function Component (Fonksiyonel Bileşen)

- Modern react'ta en çok kullanılan bileşen türüdür.
- Basit fonksiyon yapısındadır.
- useState,useEffect gibi react hookları kullanılabilir
- Daha az kod yazılır, anlaşılması daha kolaycır

```jsx
const FunctionComp = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
};
```

2. Class Component (Sınıf Tabanlı Bileşen)

- Bu react'ın eski sürümlerinde daha yaygındır.
- `extends React.Component` ifadesi ile yazılır
- `render` methodu içerisinde JSX döner
- `this.state` `this.setState` `this.props` gibi yapılar kullanılır
- `lifecycle` methodları vardır

```jsx
class ClassComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
```

# State

- Compoenent içerisinde veri (durum) tutmak için kullanılır
- React'da arayüzde değişeme sebep olucak bütün veriler state'de tutulur
- State setState methoduyla her güncellendiğinde component yeniden render olur.
- Yeniden render sayesinde arayüz güncellemesi sağlanır

# Hooks

- Class component'ların sahip olduğu yetenkleri (state,yaşam döngüsü) fonksiyonlarda kullanmamızı sağlayan özel yetenekli fonksiyonlara hook denir.

## useState

- State yapısını fonksiyonel component'larda kullanmamızı sağlar

- React'da arayüzde değişme sebep olucak bütün veirler state'de tutulur

- useState parametre olarak tutucağımız verinin başlangıç değerini alır (initialState)
- useState fonksiyonun çağırıca geriye dizi içerisinde 2 veri döndürür.
- [stateDegeri, stateGüncellemeFonksiyonu] return eder
- bu veriye ve methoda daha rahat erişebilmek için array destructuring yöntemi kullanırız

- State'in değerini her güncellediğimizde gerçekleşen güncellemenin arayüze yansıması için component otomatik olarak yeniden render olur

## useEffect

- Component'ın yaşam döngüsünü fonksiyonel component'larda izlememizi sağlar
- componentDidMount, componentDidUpdate, componentWillUnmount methodlarının görevini üstlenir

# Lifecycle Methods (Yaşam Döngüsü Methodları)

- Lifecycle methods, bir component'ın oluşum, güncellenme, kaldırılma süreçlerini yönetmek için kullanılan özel methodlardır.
- Bu kavram özellikle class component'larda vardır. Fakat moder react'ta bu işlemleri useEffect gibi Hooks ile fonksiyonel bileşenlerde yapabiliyoruz

## Lifecycle (Yaşam Döngüsü) Nedir?

- Bir component'In aaşağıdaki süreçlerine genel ismidir.

1. Oluşturulması (Mounting)
2. Güncellenmesi (Updating)
3. Kaldırılması (Unmounting)
