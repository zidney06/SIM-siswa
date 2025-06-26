import express from "express";
import {
  createUser,
  deleteUser,
  editUser,
  getBiodata,
  loginHandler,
  logoutHandler,
} from "../handler/userRoutesHndl.js";
import {
  verifyOperator,
  verifyToken,
  upload,
} from "../middleware/middlewares.js";

const route = express.Router();

route.get("/:userId", verifyToken, getBiodata);
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
