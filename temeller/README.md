# React Nedir ?

- React, facebook tarafından geliştirilen bir javascript kütüphanesidir.
- Daha performanslı uyguamaları oluşturması, component mimarisi ve geniş bir kütüphane desteğine sahip olması sebeiyle çok popülerdir.

# React Projesi Nasıl Oluşturulur ?

- Projeyi oluşturma için terimale `npx create-react-app proje_ismi` yazarız

# React Projesi Nasıl Ayağa Kaldırılır ?

- Terminale `npm start` komutunu yazarız

# React Dosya/Klasör Yapısı

1. `node_modules`: Projenin bağımlılıklarının depolandığı klasördür. Projeye bir paket indirildiğinde o pakedin bütün kodları node_modules içerisine kaydedilir. Bu klasöre kesinlikle el ile müdahele etmeyiz terminale yazıcağımız komutlarla paketleri indirip/kaldırabiliriz.

2. `package.json`: Proje kullanılan kütüphanelerin sürümlerinin vs scripts tutulduğu dosyadır

3. `package-lock.json`: Proje bağımlıklarının daha detaylı bir şekilde (vesiyon bilgisi/ bğaımlıkların biribiriyle olan ilişkileri) tutan dosyadır

4. `.gitignore`: Proje githuba gönderilirken githuba pushlanmayacak olan dosyaların isimlerini yazarız
