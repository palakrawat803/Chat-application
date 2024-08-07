import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import isAutheticated from "../middleware/isAutheticated.js";

const router = express.Router();

router.route("/send/:id").post(isAutheticated,sendMessage);
router.route("/:id").get(isAutheticated,getMessage);

export default router;