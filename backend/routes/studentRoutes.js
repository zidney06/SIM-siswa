import express from "express";
import {
  getStudentPresence,
  getStudentScore,
  presenceStudent,
  setScore,
} from "../handler/studentRoutesHndl.js";
import {
  verifyToken,
  upload,
  verifyStudent,
  verifyTeacher,
  verifyOperator,
} from "../middleware/middlewares.js";

export const route = express.Router();

route.get("/get-score/:studentId", verifyToken, verifyStudent, getStudentScore);
route.get(
  "/get-presence/:studentId",
  verifyToken,
  verifyStudent,
  getStudentPresence
);
route.post("/presence", verifyToken, verifyTeacher, presenceStudent);
route.post("/score", verifyToken, verifyTeacher, setScore);

export default route;
