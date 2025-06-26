import jwt from "jsonwebtoken";
import multer from "multer";
import fs from "fs";
import path from "path";
import Blacklist from "../models/blacklistToken.model";

export const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token tidak ditemukan" });

  // Periksa apakah token ada di blacklist
  const blacklisted = await Blacklist.findOne({ token });
  if (blacklisted)
    return res.status(403).json({ message: "Token tidak valid" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Token tidak valid" });
  }
};

/* MULTER CONFIG AND MIDDLEWARE */
// pastikan folder upload sudah ada
const uploadir = path.join(import.meta.dirname, "../public/photos");

if (!fs.existsSync(uploadir)) {
  fs.mkdirSync(uploadir);
}

// konfigurasi penyimpanan multer
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, uploadir);
  },
  filename: (req, file, cb) => {
    // beri nama unik pada file
    const uniqueName =
      Date.now() + req.body.username + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });

export const verifyOperator = (req, res, next) => {
  const { role } = req.user;

  if (role !== "operator") {
    return res.status(401).json({
      msg: "Anda tidak memiliki akses!",
    });
  }

  next();
};

export const verifyStudent = (req, res, next) => {
  const { role } = req.user;

  console.log(role);

  if (role !== "student" && role !== "operator") {
    return res.status(401).json({
      msg: "Anda tidak memiliki akses!",
    });
  }

  next();
};

export const verifyTeacher = (req, res, next) => {
  const { role } = req.user;

  if (role !== "operator" && role !== "teacher") {
    return res.status(401).json({
      msg: "Anda tidak memiliki akses!",
    });
  }

  next();
};
