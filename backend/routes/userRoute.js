import express from "express";
import { getOtherUsers, login, logout, register } from "../controllers/userController.js";
import isAutheticated from "../middleware/isAutheticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAutheticated,getOtherUsers);

export default router;
