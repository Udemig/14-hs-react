import Link from "next/link";

// Parallel Routes
// Slot olarak tanımlanan notifications, revenue, users sayfalarını ekrana bas
// Slot olarak tanımlanan sayfalar layout'a prop olarak gelir
// Layouta prop olarak gelen 4 sayfayı aynan ekrana bastık
// Burada 4 ayrı component oluşturabilirdik ama zaman page.jsx'in özelliklerinden faydalanamazdık (metadata, loading, error...)
const Layout = ({ children, notifications, revenue, users }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>

      <div className="flex justify-center my-10 gap-10">
        <Link href={"/dashboard"}>Panel</Link>
        <Link href={"/dashboard/settings"}>Ayarlar</Link>
      </div>

      <div className="my-10">
        {children}

        <div className="flex my-10 gap-10">
          <div className="flex-1">{notifications}</div>
          <div className="flex-1">{revenue}</div>
        </div>

        <div>{users}</div>
      </div>
    </div>
  );
};

export default Layout;
