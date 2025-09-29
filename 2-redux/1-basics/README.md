# Temel Kavramlar

### State

- Component'ın verisini tutmak ve yönetmek için kullanırız.
- Her değiştinde component yeniden render olur.

### Prop

- Veriyi bir component'dan diğerine aktarma yöntemidir.
- Üst (kapsayıcı component)'den alt (child component)'a doğru veri aktarılır

### Prop Drilling

- İç içe bir çok bileşen olduğu durumda en üstteki bileşenden alt bileşen propu gönderderdiğimiz seneryo.
- Yani verinin doğru component'a ulaşması için 3-5 kere prop olarak aktarıldığı durum

### Context

- Component'lardan bağımsız noktalarda veri depolamamızı sağlar.
- Component'lar context yapısına direkt abone olaiblidikleri için prop drilling'i önler
- State'leri component'lardan bağımsız yönettiğimiz için sürdürelebilirlik artar.

### Context Neden En İyi Çözüm Değil ?

- Context yapısı çok iyi bir yönetim seçeneği ancak belirli çaptaki uygulamalar için.
- Belirli bir noktadan sonra projedeki state'leri yönetmek için çok fazla provider yazar ve kullanırız bu hem okunabilirliği düşürür hem performansı olumsuz etkiler hem de kod tekrarına sebep olur

### Redux'ın Artıları

- Kod tekrarını önler
- Daha performaslı bir şekilde state yönetimi sağlar
- Bileşenlerdeki karışıklığı engeller
- Hata ayıklamda daha gelişmiştir
- Merkezi bir state yönetimi sunar

# Redux Yapısı

1. Store: Uygulumadaki tüm reducer'ları bir arada tutarak veriye tek bir merkezden ulaşılmasını sağlar.

2. Reducer: Dispatch edilen aksiyona göre state'in nasıl değişeceğine karar veren fonksiyon

3. Dispatch: Action'u reducer'a iletir

4. Action: State'in nasıl değişceğini ifade eden nesne:

- - Type: Action'un görevini tanımlayan string
- - Payload: Reducer'ın işlemi gerçekleştirebilmesi için action ile gönderdiğimiz veri

5. Subscribe: Store'daki verilere erişmemizi sağlayan yöntem

6. Provider: Store'da tutulan verileri uygulamaya sağlayan HOC.

# Kurulum

1. Paket indirme
   `npm i redux react-redux`

2. Reducer'ları oluştur
   Projede kullancığımız verileri yöneticek reducer fonksiyonlarını tanımla

3. Store'u oluştur
   Reducer'ları birleştirip store'u oluştur

4. Projeye tanıt
   Provider ile store'u projeye tanıt
