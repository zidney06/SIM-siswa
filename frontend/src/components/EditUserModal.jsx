export default function EditUserModal() {
  // untuk bagian profil nanti akan dibuat di fe ketika akan melakukan request ke be
  return (
    <>
      <div
        className="modal fade"
        id="edit"
        tabIndex="-1"
        aria-labelledby="editLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editLabel">
                Edit data
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
                  Nama
                </label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="my-1">
                <label htmlFor="address" className="form-label">
                  Alamat
                </label>
                <input type="text" id="address" className="form-control" />
              </div>
              <div className="my-1">
                <label htmlFor="placeAndDateOfBirth" className="form-label">
                  Tempat tanggal lahir
                </label>
                <input
                  type="text"
                  id="placeAndDateOfBirth"
                  className="form-control"
                />
              </div>
              <div>
                <p>Gender?</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="laki-laki"
                  />
                  <label className="form-check-label" for="laki-laki">
                    Laki-laki
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="perempuan"
                  />
                  <label className="form-check-label" for="perempuan">
                    Perempuan
                  </label>
                </div>
              </div>
              <div>
                <p>Sebagai?</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="laki-laki"
                  />
                  <label className="form-check-label" for="laki-laki">
                    Guru
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="perempuan"
                  />
                  <label className="form-check-label" for="perempuan">
                    Murid
                  </label>
                </div>
              </div>
              <div className="my-1">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img red"
                  style={{ width: 100, height: 125 }}
                />
                <label htmlFor="photo" className="form-label">
                  Foto
                </label>
                <input
                  type="file"
                  id="photo"
                  className="form-control"
                  accept=".jpg, .jpeg, .png"
                />
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
