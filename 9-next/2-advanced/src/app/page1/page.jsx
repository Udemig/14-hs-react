import Link from "next/link";

const Page1 = () => {
  return (
    <div>
      <h1 className="mb-10">Page-1 Sayfası</h1>

      <Link href="/page1/page2" className="text-blue-500 text-lg">
        Page2'ye Git
      </Link>
    </div>
  );
};

export default Page1;
