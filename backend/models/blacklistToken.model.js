const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), expires: "1h" }, // Token otomatis dihapus setelah 1 jam
});

module.exports = mongoose.model("Blacklist", blacklistSchema);
