import mongoose from "mongoose";

const blacklistSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), expires: "1h" }, // Token otomatis dihapus setelah 1 jam
});

const BlackList = mongoose.model("Blacklist", blacklistSchema);

export default BlackList;
