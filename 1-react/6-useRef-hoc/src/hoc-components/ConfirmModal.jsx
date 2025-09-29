const ConfirmModal = () => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close"></button>
          </div>

          <div className="modal-body">
            <h2>Silmek istediğinizden emin misiniz?</h2>
            <p>Bu işlemin geri dönüşü yok</p>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              İptal
            </button>
            <button type="button" className="btn btn-primary">
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
