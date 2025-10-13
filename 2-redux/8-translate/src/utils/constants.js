export const customStyles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: "#3f3f46",
    borderColor: state.isFocused ? "#3b82f6" : "#52525b",
    borderWidth: "2px",
    borderRadius: "12px",
    minHeight: "48px",
    boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
    "&:hover": {
      borderColor: "#3b82f6",
    },
  }),

  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#3b82f6" : state.isFocused ? "#52525b" : "#3f3f46",
    color: state.isSelected ? "white" : "#e4e4e7",
    padding: "12px 16px",
    cursor: "pointer",
  }),

  menu: (styles, state) => ({
    ...styles,
    background: "#3f3f46",
    border: "1px solid #52525b",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  }),

  singleValue: (styles, state) => ({
    ...styles,
    color: "#e4e4e7",
  }),

  input: (styles, state) => ({
    ...styles,
    color: "#e4e4e7",
  }),

  placeholder: (styles, state) => ({
    ...styles,
    color: "#a1a1aa",
  }),
};
