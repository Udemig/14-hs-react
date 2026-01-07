// Server Action
// Bu fonksiyon "use server" sayesinde sunucu tarafında çalışır
// Bu fonksiyon içerisinde istersek direkt backend kodları yazılabilir
// Form aksiyonları formData'yı parametre olarak alır
// Bu yöntem sayesinde bir form alanını **client component yapamadan** yönetebiliyoruz
const handleSubmitAction = async (formData) => {
  "use server";

  // formdaki verilere eriş
  const name = formData.get("name");
  const surname = formData.get("surname");
  const age = formData.get("age");

  // api isteğini at..
  console.log(name, surname, age);
};

const FormPage = () => {
  return (
    <form action={handleSubmitAction} className="space-y-10">
      <input type="text" name="name" placeholder="Ad" className="border border-zinc-300 rounded-md p-2" />

      <input type="text" name="surname" placeholder="Soyad" className="border border-zinc-300 rounded-md p-2" />

      <input type="number" name="age" placeholder="Yaş" className="border border-zinc-300 rounded-md p-2" />

      <button type="submit" className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">
        Formu Gönder
      </button>
    </form>
  );
};

export default FormPage;
