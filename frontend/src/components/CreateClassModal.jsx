export default function CreateClassModal() {
  // untuk bagian profil nanti akan dibuat di fe ketika akan melakukan request ke be
  return (
    <>
      <div
        className="p-2 border border-2 rounded"
        id="createClass"
        tabIndex="-1"
        aria-labelledby="createClassLabel"
      >
        <div className="">
          <div className="">
            <h1 className=" fs-5" id="createClassLabel">
              Buat data kelas baru
            </h1>
          </div>
          <div className="">
            <div className="my-1">
              <label htmlFor="name" className="form-label">
                Nama kelas
              </label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="my-1">
              <label htmlFor="address" className="form-label">
                Wali kelas
              </label>
              <input type="text" id="address" className="form-control" />
            </div>
          </div>
          <div
            className="d-flex justify-content-between my-2"
            style={{ width: "100%" }}
          >
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
    </>
  );
}
