import { Router } from "express";
import {
  addNotesHandler,
  addYoutubeHandler,
  getNotesHandler,
  getYoutubeHandler,
} from "../controllers/contentController.js";
import { authenticate } from "../middleware/middleware.js";

const router = Router();

router.post("/yt", authenticate, addYoutubeHandler);
router.post("/notes", authenticate, addNotesHandler);
router.get("/yt", authenticate, getYoutubeHandler);
router.get("/notes", authenticate, getNotesHandler);

export default router;
