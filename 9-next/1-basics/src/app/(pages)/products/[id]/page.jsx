// statik metadata tanım
// export const metadata = {
//   title: "Ürün Detay",
// };

// dinamik metadata tanımı
export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  // api'dan ürün bilgeleri alınabilir (opsiyonel)

  return {
    title: `${id}. Ürün Detayı`,
    description: "Ürün açıklaması",
  };
};

// normalde parametreye erişmek için useParams() kulanırdık burda sadece prop olarak alırız
const DetailPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="page">
      <h1>ID: {id}</h1>
      <h1>Detay Sayfası</h1>
    </div>
  );
};

export default DetailPage;
