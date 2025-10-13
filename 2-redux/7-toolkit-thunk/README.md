# Thunk

- Aksiyonların asenron işlemler yapmasını sağlayan redux middleware'i.
- Aksiyonların içerisinderinde api isteği atıp gelen cevaba göre reducerlara haber göndermemizi sağlar.
- Klasik redux'ta thunk aksiyonunu 2 fonksiyonu iç içe yazarak oluşturuyorduk.
- Klasik redux'ta thunk'ı kullanabilmek için kütüphanesini projeye dahil etmemiz gerekiyordu.

# Toolkit Thunk

- Toolkit ile birlikte thunk kullanımı daha pratik hale geliyor.
- Toolkit store'u içerisinde thunk entegre bir şekilde gelir yani kurulama gerek yoktur.
- `createAsyncThunk` fonksiyonu ile asenkron thunk aksiyonlarını daha pratik bir şekilde oluştrabiliyoruz.
- `createAsyncThunk` fonksiyonu içerisinde sadece api isteğini atarız, loading, error, success durumlarında otomatik olarak reducer'a aksiyon dispatch edilir
