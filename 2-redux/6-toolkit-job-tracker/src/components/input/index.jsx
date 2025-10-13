import styles from "./input.module.scss";

const Input = ({ label, name, value, type, options, onChange }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>

      {options ? (
        <select id={name} name={name} type={type} required onChange={onChange}>
          <option value="">Seçiniz</option>
          {options.map((item, key) => (
            <option key={key} value={item} selected={item === value}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={`${label} giriniz`}
          defaultValue={value || ""}
          required
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
