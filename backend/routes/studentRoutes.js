import express from "express";
import { presenceStudent, setScore } from "../handler/studentRoutesHndl.js";
import {
  verifyToken,
  upload,
  verifyStudent,
  verifyTeacher,
  verifyOperator,
} from "../middleware/middlewares.js";

export const route = express.Router();

route.post("/presence", verifyToken, verifyTeacher, presenceStudent);
route.post("/score", verifyToken, verifyTeacher, setScore);

export default route;
