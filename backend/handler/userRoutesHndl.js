import User from "../models/user.model.js";
import Class from "../models/class.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Blacklist from "../models/blacklistToken.model.js";
import path from "path";
import fs from "fs";

dotenv.config();

export const loginHandler = async (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.status(401).json({
      msg: "username atau password belum dimasukan!",
    });
  }

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({
        msg: `User dengan username: ${username} tidak ditemukan`,
      });
    }
    if (password !== user.password) {
      return res.status(401).json({ msg: "Password salah" });
    }

    const payload = {
      username: username,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 1,
    });

    res.status(200).json({
      msg: `Berhasil!`,
      token: token,
      role: user.role,
      id: user._id,
      name: user.name,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Terjadi masalah!" });
  }
};

export const logoutHandler = async (req, res) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(400).json({ message: "Token tidak ditemukan" });

  console.log(token);

  try {
    // Simpan token ke blacklist
    await Blacklist.create({ token });
    res.status(200).json({ message: "Logout berhasil" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan", error: err.message });
  }
};

// ambil data siswa 10 10 dulu
export const getUser = async (req, res) => {
  const { page } = req.params;
  const skip = (page - 1) * 10;

  try {
    const users = await User.find({ _id: { $ne: "684f7639b001ead0fe283716" } })
      .skip(skip)
      .limit(10);

    if (users.length == 0) {
      console.log(users);
      return res.status(404).json({
        msg: "Data tidak ditemukan",
      });
    }

    res.status(200).json({
      msg: "Berhasil",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Gagal!",
    });
  }
};

export const getBiodata = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        msg: "Data tidak ditemukan",
      });
    }

    res.status(200).json({
      msg: "Data berhasil didapatkan",
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi masalah dalam server",
    });
  }
};

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const createUser = async (req, res) => {
  // cek apakah user mengirimkan file atau tidak
  if (!req.file) {
    return res.status(400).json({ msg: "Tidak ada file yang diupload" });
  }

  try {
    const data = JSON.parse(req.body.data);

    data.image = `/public/photos/${req.file.filename}`;
    data.password = generateRandomString(8);

    const newUser = new User(data);

    const newdata = await newUser.save();

    let savedClass;
    if (newdata.role == "student") {
      const kelas = await Class.findOne({ name: data.className });

      kelas.students.push(newUser._id);

      savedClass = await kelas.save();
    }

    return res.status(201).json({
      msg: "Berhasil membuat data baru!",
      data: { newUser, savedClass },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Terjadi kesalahan");
  }
};

export const editUser = async (req, res) => {
  const userId = req.params.userId;
  const editedUser = JSON.parse(req.body.data);

  console.log(editedUser);

  try {
    // jika ada file yang diupload

    if (req.file) {
      const filePath = path.join(import.meta.dirname, `../${editedUser.image}`);

      console.log(filePath);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("gagal menghapus file", err);
          return res.status(500);
        }
      });

      editedUser.image = `/public/photos/${req.file.filename}`;

      console.log(req.file.filename);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, editedUser, {
      new: true,
    });

    if (!updatedUser) {
      res.status(404).json({
        msg: "Data siswa tidak ditemukan!",
      });

      return;
    }

    res.status(201).json({
      msg: "Berhasl memperbarui data siswa",
      data: updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Terjadi masalah!");
  }
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        msg: "data tidak ditemukan",
      });
    }

    res.status(200).json({
      msg: "Data berhasil dihapus",
      data: deletedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Terjadi masalah dalam server!",
    });
  }
};
