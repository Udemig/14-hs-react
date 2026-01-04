import Link from "next/link";

const Page3 = () => {
  return (
    <div>
      <h1 className="mb-10">Page-3 Sayfası</h1>

      <Link href="/page4" className="text-blue-500 text-lg">
        Page4'e Git
      </Link>
    </div>
  );
};

export default Page3;
