# Redux Toolkit

- Klasik redux'a göre daha az kod yazarak aynı sonucu elde etmemizi sağlar, yaptığımız bir çok manuel işlem için (action-types, reducers, action creater) hazır methodalara sahip, klasik redux'ın daha pratik versiyonu

- İçerisinde redux-thunk ve redux-dev-tools paketleri kurulu olarak gelir

# Kurulum

- npm i @reduxjs/toolkit react-redux
- store'u ve slice'ı (reducer'ları) oluştur
- store'u projeye tanıt

# Klasik Redux'da Oluşturduğumuz Yapılar

- store - reducer - action types - action creators

# Toolkit'de Oluşturduğumuz Yapılar

- store - slice

# Slice

- Klasik redux'ta aksiyonları, aksiyon tiplerini, reducer'ları ayrı ayrı tanımlıyorduk
- redux toolkit içerisinde yer alan slice yapısı sayesinde tek bir noktada aksiyonları, aksiyon tiplerini, reducer'ları tanımlayabiliyoruz
