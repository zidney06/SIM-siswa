import mongoose from "mongoose";

const daftarMapel = ["MTK", "B Indo", "B Inggris", "IPA", "IPS"];

// sub schemas
const presenceDateSchema = new mongoose.Schema({
  date: {
    type: [Date],
    default: [],
  },
});

const presenceSchema = new mongoose.Schema({
  present: presenceDateSchema,
  permission: presenceDateSchema,
  alpha: presenceDateSchema,
  date: [Date],
});

const rankDateSchema = new mongoose.Schema({
  rank: {
    type: Number,
    default: 0,
  },
  date: {
    type: [Date],
    default: [],
  },
});

const rankSchema = new mongoose.Schema({
  best: rankDateSchema,
  newest: rankDateSchema,
  rankHistory: [rankDateSchema],
});

const examSchema = new mongoose.Schema({
  semester: { type: Number, required: true },
  bIndo: { type: Number, required: true },
  bInggris: { type: Number, required: true },
  MTK: { type: Number, required: true },
  IPA: { type: Number, required: true },
  IPS: { type: Number, required: true },
});

const scoreSchema = new mongoose.Schema({
  uts: {
    type: [examSchema],
    default: [],
  },
  uas: {
    type: [examSchema],
    default: [],
  },
});

const studentSchema = new mongoose.Schema({
  presence: presenceSchema,
  ranking: rankSchema,
  score: scoreSchema,
});

const teacherSchema = new mongoose.Schema({
  homeRoom: String,
});

// main schema
export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "operator"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    placeAndDateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    profil: {
      student: {
        type: studentSchema,
        default: {
          presence: {
            present: {
              date: [],
            },
            permission: {
              date: [],
            },
            alpha: {
              date: [],
            },
            date: [],
          },
          ranking: {
            best: {
              rank: 0,
              date: [],
            },
            newest: {
              rank: 0,
              date: [],
            },
            rankHistory: [
              {
                rank: 0,
                date: [],
              },
            ],
          },
          score: {
            uts: [],
            uas: [],
          },
        },
      },
    },
    teacher: {
      type: teacherSchema,
      default: {
        homeRoom: "none",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
