import styles from "./card.module.scss";

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Staj":
        return "var(--warning-color)";
      case "Tam Zamanlı":
        return "var(--primary-color)";
      case "Yarı Zamanlı":
        return "var(--danger-color)";
      case "Uzaktan":
        return "var(--success-color)";
      default:
        return "var(--text-muted)";
    }
  };

  return (
    <span className={styles.statusBadge} style={{ "--status-color": getStatusColor(status) }}>
      {status}
    </span>
  );
};

export default StatusBadge;
