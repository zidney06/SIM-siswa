import Class from "../models/class.model.js";

export const getClass = async (req, res) => {
  const { classId } = req.params;

  try {
    /*
    penggunaan populate adalah Model.<query>.populate(<field dari Model yang mengguakan relas>)

    dalam contoh ini Model Class memiliki field students yang memakai relasi, maka yang diisi dalam 
    populate adalah nama field tersebut
    */
    const classData = await Class.findById(classId).populate("students");

    if (!classData) {
      res.status(404).json({
        msg: "data tidak ditemukan",
      });

      return;
    }

    res.status(200).json({
      msg: "Oke",
      data: classData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi masalah dalam server!",
    });
  }
};

export const getClassList = async (req, res) => {
  try {
    const data = await Class.find({});

    res.status(200).json({
      msg: "Data",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Terjadi kelasalahan!" });
  }
};

export const createClass = async (req, res) => {
  const data = req.body;
  try {
    if (!data.name || !data.wali) {
      return res.status(400).json({
        msg: "Data tidak lengkap",
      });
    }

    const isExist = await Class.findOne({ name: data.name });

    if (isExist) {
      return res.status(400).json({
        msg: "Data sudah dibuat",
      });
    }

    const newClass = new Class(data);

    await newClass.save();

    // jika route tidak diakhiri dengan .send(), json() atau sejenisnya maka akan dianggap bahwa request belum selesai
    return res.status(201).json({
      msg: "Berhasil membuat data kelas baru",
      data: newClass,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Terjadi masalah dalam server",
    });
  }
};

export const editClass = async (req, res) => {
  const { classId } = req.params;
  const data = req.body;

  try {
    const classData = await Class.findByIdAndUpdate(classId, data, {
      new: true,
    });

    if (!classData) {
      res.status(404).json({
        msg: "Data siswa tidak ditemukan!",
      });

      return;
    }

    console.log(classData);

    res.status(201).json({
      msg: "Berhasil merubah data kelas",
      data: classData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi kesalahan dalam server!",
    });
  }
};

export const deleteClass = async (req, res) => {
  const { classId } = req.params;

  try {
    const deletedClass = await Class.findByIdAndDelete(classId);

    if (!deletedClass) {
      return res.status(404).json({
        msg: "data tidak ditemukan",
      });
    }

    res.status(200).json({
      msg: "Data berhasil dihapus",
      data: deletedClass,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi masalah dalam server!",
    });
  }
};
