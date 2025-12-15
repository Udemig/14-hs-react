import { Plus } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Head: FC = () => {
  return (
    <div className="flex justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-primary">Notlarım</h1>
        <p className="text-text-secondary">
          Tüm notlarınıız burada görüntüleyin ve yönetin
        </p>
      </div>

      <Link
        to="/create"
        className="bg-primary text-text-primary hover:bg-primary-hover py-2 px-4 rounded-md shadow-sm transition inline-flex items-center whitespace-nowrap"
      >
        <Plus /> Yeni Not Ekle
      </Link>
    </div>
  );
};

export default Head;
