import User from "../models/user.model.js";

export const presenceStudent = async (req, res) => {
  const students = req.body;
  let responseData = [];

  if (students.length == 0) {
    return res.status(400).json({
      msg: "Data yang dibutuhkan belum terkirim!",
    });
  }

  try {
    for (const student of students) {
      let studentPresence;
      studentPresence = await User.findById(student.id);

      if (!studentPresence) {
        return res.status(404).json({
          msg: "Data tidak ditemukan",
        });
      }

      // lakukan absensii berdasarkan status kehadiran
      switch (student.presence) {
        case "hadir":
          studentPresence.profil.student.presence.present.amount += 1;
          studentPresence.profil.student.presence.present.date.push(Date.now());

          break;
        case "izin":
          studentPresence.profil.student.presence.permission.amount += 1;
          studentPresence.profil.student.presence.permission.date.push(
            Date.now()
          );

          break;
        case "alpha":
          studentPresence.profil.student.presence.alpha.amount += 1;
          studentPresence.profil.student.presence.alpha.date.push(Date.now());

          break;
        default:
          console.log("ada yang salah");

          break;
      }

      await studentPresence.save();

      responseData.push(studentPresence);
    }
    res.status(201).json({
      msg: "Berhasil",
      data: responseData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi kesalahan pada server!",
    });
  }
};

export const setScore = async (req, res) => {
  const { studentId } = req.params;
  const body = req.body;

  try {
    const student = await User.findById(studentId);

    if (!student) {
      return res.status(404).json({
        msg: "Data tidak ditemukan",
      });
    }

    if (body.type == "uts") {
      // cek apakah data untuk semester dari body.data.semester sudah ada?
      const isExist = student.profil.student.score.uts.some(
        (item) => item.semester == body.data.semester
      );
      if (isExist) {
        return res.status(400).json({
          msg: "Data sudah di isi!",
        });
      }

      student.profil.student.score.uts.push(body.data);
    } else if (body.type == "uas") {
      const isExist = student.profil.student.score.uas.some(
        (item) => item.semester == body.data.semester
      );
      if (isExist) {
        return res.status(400).json({
          msg: "Data sudah di isi!",
        });
      }

      student.profil.student.score.uas.push(body.data);
    } else {
      res.status(400).json({ msg: "Ada salah tipe nilai. harus uts / uas" });
    }

    await student.save();

    res.status(201).json({
      msg: "Oke",
      data: student,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi masalah",
    });
  }
};
