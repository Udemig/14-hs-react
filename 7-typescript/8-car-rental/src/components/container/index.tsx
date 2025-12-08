import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

// HOC: Higher Order Component
// Diğer component/elementleri kapsayan ve kapsadığı elementlere children propu ile erişen componentlara denir
const Container: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <div className="home-error-container">{children}</div>
    </div>
  );
};

export default Container;
