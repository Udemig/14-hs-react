import styles from "./input.module.scss";

const Input = ({ label, name, value, type, options }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>

      {options ? (
        <select id={name} name={name} type={type} defaultValue={value || ""} required>
          <option value="">Seçiniz</option>
          {options.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input id={name} name={name} type={type} placeholder={`${label} giriniz`} defaultValue={value || ""} required />
      )}
    </div>
  );
};

export default Input;
