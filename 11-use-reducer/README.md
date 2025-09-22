# useReducer

- Bir react hook'udur.
- useReducer bir component içerisindeki birden fazla state'i daha kolay bir şekilde yönetmek için kullanılır
- Bu hook'u genelde useState ile state yönetiminin karmaşık olmaya başladığı componet'larda useState'in yerine tercih ederiz
- Component içerisindeki bütün state yönetim mantığını farklı bir dosyada tanımlamıza olanak sağlar bu da kod okunabilirliğini ve yönetilebilirliğini arttır

1. Action

- State'in nasıl değişeceğini ifade eden nesneler.
- type ve payload değerine sahiptir
- type: Ekle, Sil, Güncelle, Gönder, Yükle, Tema Değiş
- payload (opsiyonel): eylemin gerçekleşmesi için gerekli detaylar
- örnek action: {type:"SİL", payload:897}
- örnek action: {type:"Tema Değiş"}

2. Dispatch

- Aksiyonu reducer fonksiyonuna göndermeye yarar
- Dispatch: Sevketmek
- örnek: dispatch({type:"Tema Değiş"})

3. Reducer Fonksiyonu

- State'in nasıl değişeceğine karar verir
- Aksiyon'lar dispatch edildiği zaman useReducer bunları görür ve dispatch edilen aksiyona göre state'in nasıl değişiceğine karar
