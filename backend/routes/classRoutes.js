import express from "express";
import { verifyOperator, verifyToken } from "../middleware/middlewares";
import {
  createClass,
  deleteClass,
  editClass,
  getClass,
} from "../handler/classRoutesHndl";

const route = express.Router();

route.get("/:classId", verifyToken, verifyOperator, getClass);
route.post("/", verifyToken, verifyOperator, createClass);
route.put("/:classId", verifyToken, verifyOperator, editClass);
route.delete("/:classId", verifyToken, verifyOperator, deleteClass);

export default route;
