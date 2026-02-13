import type { Request, Response } from "express";
import { yt } from "../drizzle/schema.js";
import { db } from "../config/db.js";
import type { AuthRequest } from "../middleware/middleware.js";

export const addYoutubeHandler = async (req: AuthRequest, res: Response) => {
  try {
    const { title, url } = req.body;

    if (!title || !url) {
      return res.status(400).json({
        message: "Required field missing",
      });
    }

    if (!req.user?.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const ytVideo = await db.insert(yt).values({
      title,
      url,
      createdBy: req.user.id,
    })
    .returning();

    res.status(200).json({
      message: "content added successfully",
      data: ytVideo[0]
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

