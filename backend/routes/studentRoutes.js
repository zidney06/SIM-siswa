import express from "express";
import {
  deleteStudent,
  getStudent,
  presenceStudent,
  setScore,
} from "../handler/studentRoutesHndl";
import {
  verifyToken,
  upload,
  verifyStudent,
  verifyTeacher,
  verifyOperator,
} from "../middleware/middlewares";

const route = express.Router();

route.get("/get-student/:page", verifyToken, verifyOperator, getStudent);
route.post("/presence", verifyToken, verifyTeacher, presenceStudent);
route.post("/score/:studentId", verifyToken, verifyTeacher, setScore);

export default route;
