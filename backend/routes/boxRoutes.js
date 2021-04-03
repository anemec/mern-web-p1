import express from "express";
const router = express.Router();

import { getBoxes } from "../controllers/boxController.js";

router.route("/").get(getBoxes);

export default router;
