import Link from "next/link";

const Page2 = () => {
  return (
    <div>
      <h1 className="mb-10">Page-2 Sayfası</h1>

      <Link href="/page1" className="text-blue-500 text-lg">
        Page1'e Dön
      </Link>
    </div>
  );
};

export default Page2;
