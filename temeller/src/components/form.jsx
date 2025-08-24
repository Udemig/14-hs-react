function Form() {
  // JS KODU ↓↓↓↓
  const person = {
    name: "ahmet",
    age: "67",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form gönderildi");
  };

  // eskiden
  // const form = document.querySelector("form");
  // form.addEventListener("submit", handleSubmit);

  // JSX KODU ↓↓↓↓
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Ürün İsmi</label>

      <input id="product" type="text" />
      {/*
      ! self closing olması gerekn elementler
      <hr />
      <br />
      <image />

      ! istersek self closing yapabilirizs
      <div className="circle" /> 
      */}
    </form>
  );
}
export default Form;
