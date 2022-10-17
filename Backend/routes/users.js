import express from "express";

import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// For testing purposes only

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are now logged correctly");
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("hello User, you are logged in and you can delete your account");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin, you are logged in and you can delete your account");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
