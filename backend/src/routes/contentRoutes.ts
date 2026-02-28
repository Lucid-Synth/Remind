import { Router } from "express";
import {
  addNotesHandler,
  addYoutubeHandler,
  deleteNotesHandler,
  deleteYoutubeHandler,
  getNotesHandler,
  getYoutubeHandler,
} from "../controllers/contentController.js";
import { authenticate } from "../middleware/middleware.js";

const router = Router();

router.post("/yt", authenticate, addYoutubeHandler);
router.post("/notes", authenticate, addNotesHandler);
router.get("/yt", authenticate, getYoutubeHandler);
router.get("/notes", authenticate, getNotesHandler);
router.delete("/yt/:id", authenticate, deleteYoutubeHandler);
router.delete("/notes/:id", authenticate, deleteNotesHandler);

export default router;