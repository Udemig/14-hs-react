// HOC
// HOC'lar kapsadığı içerikleri children prop'u aracılığıyla erişebilir
const Modal = ({ children, submit }) => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close"></button>
          </div>

          <div className="modal-body">{children}</div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              İptal
            </button>
            <button type="button" className="btn btn-primary">
              {submit}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
