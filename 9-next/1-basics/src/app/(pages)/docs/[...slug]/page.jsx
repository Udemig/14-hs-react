const DocsPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <div className="page">
      <h1>Belge Detay Sayası</h1>

      <h2 className="mt-20">{slug.map((item) => item).join("/")}</h2>
    </div>
  );
};

export default DocsPage;
