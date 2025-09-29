const FormModal = () => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close"></button>
          </div>

          <div className="modal-body">
            <h2 className="mb-4">Hesap Oluştur</h2>

            <form>
              <label>Eposta</label>
              <input type="email" className="form-control" />
              <label className="mt-3">Şifre</label>
              <input type="pasword" className="form-control" />
            </form>
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

export default FormModal;
