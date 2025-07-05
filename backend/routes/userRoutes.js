import express from "express";
import {
  createUser,
  deleteUser,
  editUser,
  getBiodata,
  getUser,
  loginHandler,
  logoutHandler,
} from "../handler/userRoutesHndl.js";
import {
  verifyOperator,
  verifyToken,
  upload,
  verifyTeacher,
} from "../middleware/middlewares.js";

const route = express.Router();

route.get("/getUserList/:page", verifyToken, verifyOperator, getUser);
route.get("/biodata/:userId", verifyToken, getBiodata);
route.post("/login", loginHandler);
route.post("/logout", verifyToken, logoutHandler);
route.post(
  "/",
  verifyToken,
  verifyOperator,
  upload.single("photo"),
  createUser
);
route.put(
  "/:userId",
  verifyToken,
  verifyOperator,
  upload.single("photo"),
  editUser
);
route.delete("/:userId", verifyToken, verifyOperator, deleteUser);

export default route;
