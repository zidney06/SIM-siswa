import { delFetch } from "../utils/fetch";

export default function DeleteModal({ id, data, setData, url }) {
  const hndlConfirm = () => {
    delFetch(url + id).then((res) => {
      if (!res.success) {
        alert(res.respones.data.msg);

        return;
      }
      const newData = data.filter((item) => item._id != res.data.data._id);
      setData(newData);
    });
  };

  console.log(url + id);

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
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={hndlConfirm}
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
