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
