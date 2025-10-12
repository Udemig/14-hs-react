import styles from "./error.module.scss";
import { OctagonX } from "lucide-react";

const Error = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <OctagonX />
      <h1>Üzgünüz bir sorun oluştu</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
