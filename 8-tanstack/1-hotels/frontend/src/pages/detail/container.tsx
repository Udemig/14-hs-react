import { ArrowLeft } from "lucide-react";
import type { FC } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

// Higher Order Component
interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex mb-5">
        <Link
          to="/"
          className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-200"
        >
          <ArrowLeft />
        </Link>
      </div>

      {children}
    </div>
  );
};

export default Container;
