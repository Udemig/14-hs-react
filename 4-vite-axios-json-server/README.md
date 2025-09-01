# Vite

- Proje oluşturmada kullanılan bir araç.
- React projeleri oluşturmak için kullanırız.
- `create-react-app` yerine `create vite` tercih etmemizin sebebi vite'ın proje oluşturma / ayağa kaldırma / değişikliklerin ekrana yansıması sürelerinin daha hızlı olması

# CRA vs Vite Farklar

- Vite her konuda daha hızlı
- Vite ile olıuşturulan projelerde gereksiz dosya / bağımlılıklar yer almaz
- `app.js` > `app.jsx`
- `index.js` > `main.jsx` dosya isimlerinde farklılık var.
- `npm start` > `npm run dev` komutunu kullanırız

# Json-Server

- Hızlıca bir REST Api oluşturmak için kullanılan hafif basit bir node.js kütüphanesi.
- Mock (sahte) bir backend oluşturmak isteyen frontend geliştiricilerinin işine yarar.
- Gerçek bir veritabanı kurmak yerine `db.json` dosyası üzerinden çalışan bir api sunar.

## Neden sahte bir api oluşturmak istiyim?

- Sahte api'ları prototipleme amacıyla kullanabiliriz çünkü sahte api kullandığımız projeyi yayınlayamayız.
- Sahte api'ları get|post|put|patch|delete isteği atarak kendimizi test ediceğimiz basit projeler için kullanabiliriz

## JSON Server Kullanımı

- projeye `json-server` kütüphanesi dahil edilmeli

- projenin en dış klasöründe bir `db.json` dosyası oluştur

- terminale `npx json-server --watch db.json --port 4000` kodunu yazarak db.json üzerinden çalışan `get|post|put|patch|delete` isteklerini kabul eden sahte bir api oluşturuyoruz

- terimale yazılacak komutun unutulmaması için scripts alanına eklenebilir

## Not

- Yapılan isteklerde veriyi güncelledikçe json dosyasıda otomatik olara güncellenir.

# Axios

- Axios, tarayıcıda (frontend) ve node.js (backend) ortamında HTTP istkleri atmamızı sağlayan bir javascript kütüphanesidir

## Neden Axios

- `fetch` yöntemine göre kullanımı daha pratik
- istekleri otomatik olarak JSON'dan JS formatına çevir
- gönderilen body verisi otomatik olarak JS'den JSON formatına çevrilir
- interceptor özelliği ile istek ve cevaplara müdahale edebiliyoruz
- timeout, baseUrl, headers gibi ayarları kolaylıkla yapabiliyoruz

# Fetch vs Axios

- **PARAMETRE**

```jsx
// fetch'de parametre tanımı
fetch("http://localhost:4000/todos?_sort=date&_order=desc");

// axios'da parametre tanımı
const params = { _sort: "date", _order: "desc" };
axios("/todos", { params });
```

- **GET**

```jsx
// fetch
fetch("http://localhost:4000/todos");

// axios
api.get("/todos");
```

- **POST**

```jsx
// fetch
fetch("http://localhost:4000/todos", { method: "POST", body: JSON.stringify(newTodo) });

// axios
api.post("/todos", newTodo);
```

- **DELETE**

```jsx
// fetch
fetch(`http://localhost:4000/todos/${todo.id}`, { method: "DELETE" });

// axios
api.delete(`/todos/${todo.id}`);
```

- **UPDATE**

```jsx
// fetch
fetch("http://localhost:4000/todos/id", { method: "PATCH", body: JSON.stringify(updateData) });

// axios
api.patch("/todos/id", updateData);
```
