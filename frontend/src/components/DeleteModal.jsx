export default function DeleteModal() {
  return (
    <>
      <div
        className="modal fade"
        id="delete"
        tabIndex="-1"
        aria-labelledby="deleteLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteLabel">
                Hapus data
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Apakah anda yakin?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Batal
              </button>
              <button type="button" className="btn btn-primary">
                Iya
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
