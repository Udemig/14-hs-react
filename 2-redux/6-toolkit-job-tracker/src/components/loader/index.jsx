import { LoaderCircle } from "lucide-react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderCircle />
    </div>
  );
};

export default Loader;
