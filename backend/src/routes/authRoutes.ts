import { Router } from "express";
import {
  loginHandler,
  registerhandler,
} from "../controllers/authController.js";

const router = Router();

router.post("/register", registerhandler);
router.post("/login", loginHandler);

export default router;
