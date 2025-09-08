const Field = ({ label, children }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>

      {children}

      <span className="form-text">hata mesajı</span>
    </div>
  );
};

export default Field;
