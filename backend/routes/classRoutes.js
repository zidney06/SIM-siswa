import express from "express";
import {
  verifyOperator,
  verifyTeacher,
  verifyToken,
} from "../middleware/middlewares.js";
import {
  createClass,
  deleteClass,
  editClass,
  getClass,
  getClassList,
} from "../handler/classRoutesHndl.js";

const route = express.Router();

route.get("/classList", verifyToken, verifyTeacher, getClassList);
route.get("/:classId", verifyToken, verifyTeacher, getClass);
route.post("/", verifyToken, verifyOperator, createClass);
route.put("/:classId", verifyToken, verifyOperator, editClass);
route.delete("/:classId", verifyToken, verifyOperator, deleteClass);

export default route;
