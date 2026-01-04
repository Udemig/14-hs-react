// Next.js Image Component
import Image from "next/image";

// local image
import localImage from "../../assets/nature.jpg";

// remote url
const remoteUrl =
  "https://images.unsplash.com/photo-1766988156039-85f5a592df64?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Page = () => {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <h1 className="text-lg mb-2">Local Resim (Optimizasyon Yok)</h1>

        <Image src={localImage} alt="doğa" unoptimized />
      </div>

      <div>
        <h1 className="text-lg mb-2">Local Resim (Optimizasyon Var)</h1>

        <Image src={localImage} alt="doğa" quality={40} priority placeholder="blur" />
      </div>

      <div>
        <h1 className="text-lg mb-2">Remote Resim (Optimizasyon Var)</h1>

        <Image src={remoteUrl} alt="deniz" width={800} height={1200} />
      </div>
    </div>
  );
};

export default Page;
