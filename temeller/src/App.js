import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Form from "./components/form";

function App() {
  const products = ["Telefon", "Tablet", "Bilgisayar", "T-Shirt", "Atlet", "Forma", "Mouse", "Klavye"];

  return (
    <div className="app">
      {/* Bir component kullanmak için <Component /> syntaxı kullanırız */}
      <Header />

      <main>
        <h1>Ürünler</h1>

        <Form />

        <section>
          {/* {products.map((product, index) => (
            <Card key={index} />
          ))} */}

          <Card name="Telefon" stock={10} />
          <Card name="Bilgisayar" stock={0} />
          <Card name="Tablet" stock={6} />
          <Card name="Mouse" stock={0} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
