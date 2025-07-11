import User from "../models/user.model.js";

export const getStudentScore = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await User.findById(studentId);

    if (!student) {
      return res.status(404).json({
        msg: "Data tidak ditemukan!",
      });
    }

    res.status(200).json({
      msg: "Berhasil mendapatkan data",
      score: student.profil.student.score,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi masalah dengan server!",
    });
  }
};

export const getStudentPresence = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await User.findById(studentId);

    if (!student) {
      return res.status(404).json({
        msg: "Data tidak ditemukan!",
      });
    }

    res.status(200).json({
      msg: "Berhasil mendapatkan data",
      presence: student.profil.student.presence,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi kesalahan dalam server!",
    });
  }
};

export const presenceStudent = async (req, res) => {
  const students = req.body;
  let responseData = [];

  if (students.length == 0) {
    return res.status(400).json({
      msg: "Data yang dibutuhkan belum terkirim!",
    });
  }

  try {
    for (let student of students) {
      if (!student.presence) {
        console.log(student);
        return res.status(400).json({
          msg: "Ada data yang belum dichecklist!",
        });
      }
    }

    for (const student of students) {
      let studentPresence;
      studentPresence = await User.findById(student.id);

      if (!studentPresence) {
        return res.status(404).json({
          msg: "Data tidak ditemukan",
        });
      }
      // logik buat ngecek apakah sudah diabsen hari ini atau belum
      const today = new Date();
      let sudahDiabsen = false;
      const dateStudent = studentPresence.profil.student.presence.date;

      // cek dari array date, apakah tanggal sekarang sudah ada atau belum. jika ada maka sudahDiabsen = true
      for (let i = 0; i < dateStudent.length; i++) {
        const tes = new Date(dateStudent[i]);

        if (
          tes.getDate() == today.getDate() &&
          tes.getMonth() == today.getMonth()
        ) {
          sudahDiabsen = true;
        }
      }

      // apakah sudah diabsen hari ini?
      if (!sudahDiabsen) {
        // lakukan absensii berdasarkan status kehadiran
        switch (student.presence) {
          case "hadir":
            studentPresence.profil.student.presence.present.date.push(
              Date.now()
            );
            studentPresence.profil.student.presence.date.push(Date.now());

            break;
          case "izin":
            studentPresence.profil.student.presence.permission.date.push(
              Date.now()
            );
            studentPresence.profil.student.presence.date.push(Date.now());

            break;
          case "alpha":
            studentPresence.profil.student.presence.alpha.date.push(Date.now());
            studentPresence.profil.student.presence.date.push(Date.now());

            break;
          default:
            console.log("status presensi tidak valid");

            break;
        }

        await studentPresence.save();

        responseData.push(studentPresence.profil.student.presence);
      } else {
        responseData.push("sudah");
      }
    }
    res.status(201).json({
      msg: "Berhasil mengabsen siswa!",
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
  const students = req.body.data;

  let dummy = [];

  let responses = [];

  try {
    for (let item of students) {
      const student = await User.findById(item.id);

      if (!student) {
        return res.status(404).json({
          msg: "Data tidak ditemukan",
        });
      }

      if (req.body.type == "uts") {
        // cek apakah data untuk semester dari student.data.semester sudah ada?
        const isExist = student.profil.student.score.uts.some(
          (item) => item.semester == req.body.semester
        );
        if (isExist) {
          return res.status(400).json({
            msg: "Data sudah di isi!",
          });
        }

        student.profil.student.score.uts.push({
          semester: req.body.semester,
          bIndo: item.bIndo,
          bInggris: item.bInggris,
          MTK: item.MTK,
          IPA: item.IPA,
          IPS: item.IPS,
        });

        console.log(student.profil.student.score.uts);
      } else if (req.body.type == "uas") {
        const isExist = student.profil.student.score.uas.some(
          (item) => item.semester == req.body.semester
        );
        if (isExist) {
          return res.status(400).json({
            msg: "Data sudah di isi!",
          });
        }

        student.profil.student.score.uas.push({
          semester: req.body.semester,
          bIndo: item.bIndo,
          bInggris: item.bInggris,
          MTK: item.MTK,
          IPA: item.IPA,
          IPS: item.IPS,
        });
      } else {
        return res
          .status(400)
          .json({ msg: "Ada salah tipe nilai. harus uts / uas" });
      }

      await student.save();

      responses.push(student);
    }

    res.status(201).json({
      msg: "Berhasil menginput skor",
      data: responses,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi masalah",
    });
  }
};
