import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Form from "./components/form";
import Button from "./components/button";

function App() {
  const products = ["Telefon", "Tablet", "Bilgisayar", "T-Shirt", "Atlet", "Forma", "Mouse", "Klavye"];

  console.dir(document);

  return (
    <div className="app">
      {/* Bir component kullanmak için <Component /> syntaxı kullanırız */}
      <Header />

      <main>
        <h1>Ürünler</h1>

        <Form />

        <section>
          {products.map((product, index) => (
            <Card key={index} name={product} />
          ))}

          <Button metin="Gönder" renk="red" />
          <Button metin="Kaydet" renk="aqua" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
