import Link from "next/link";

const Page4 = () => {
  return (
    <div>
      <h1 className="mb-10">Page-4 Sayfası</h1>

      <Link href="/page3" className="text-blue-500 text-lg">
        Page3'e Dön
      </Link>
    </div>
  );
};

export default Page4;
