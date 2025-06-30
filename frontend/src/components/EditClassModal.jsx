export default function EditClassModal() {
  // untuk bagian profil nanti akan dibuat di fe ketika akan melakukan request ke be
  return (
    <>
      <div
        className="modal fade"
        id="editClass"
        tabindex="-1"
        aria-labelledby="editClassLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editClassLabel">
                Edit kelas
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body green">
              <div className="my-1">
                <label htmlFor="name" className="form-label">
                  Nama kelas
                </label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="my-1">
                <label htmlFor="address" className="form-label">
                  Wali
                </label>
                <input type="text" id="address" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
