import User from "../models/user.model.js";
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
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Terjadi masalah!" });
  }
};

export const logoutHandler = async (req, res) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(400).json({ message: "Token tidak ditemukan" });

  try {
    // Simpan token ke blacklist
    await Blacklist.create({ token });
    res.status(200).json({ message: "Logout berhasil" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan", error: err.message });
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

export const createUser = async (req, res) => {
  // cek apakah user mengirimkan file atau tidak
  if (!req.file) {
    return res.status(400).json({ msg: "Tidak ada file yang diupload" });
  }

  try {
    const data = req.body;

    data.image = `/public/photos/${req.file.filename}`;

    const newUser = new User(data);

    await newUser.save();

    return res.status(201).json({
      msg: "Berhasil membuat data baru!",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Terjadi kesalahan");
  }
};

export const editUser = async (req, res) => {
  const id = req.params.userId;
  const editedUser = req.body;

  try {
    let user = await User.findById(id);

    if (!user) {
      res.status(404).json({
        msg: "Data siswa tidak ditemukan!",
      });

      return;
    }

    // jika ada file yang diupload
    if (req.file) {
      const filePath = path.join(import.meta.dirname, `../${user.image}`);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("gagal menghapus file", err);
          return res.status(500);
        }
      });

      editedUser.image = `/public/photos/${req.file.filename}`;
    }

    // ini hanya akan mengubah field yang ada dalam editedUser. jika ada field yang tidak diisi maka field tersebut
    // tidak berubah
    user.field = editedUser;

    const updateduser = await user.save();

    res.status(201).json({
      msg: "Berhasl memperbarui data siswa",
      data: updateduser,
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
