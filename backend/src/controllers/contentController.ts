import type { Request, Response } from "express";
import { notes, yt } from "../drizzle/schema.js";
import { db } from "../config/db.js";
import type { AuthRequest } from "../middleware/middleware.js";
import { eq } from "drizzle-orm";

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

    const ytVideo = await db
      .insert(yt)
      .values({
        title,
        url,
        createdBy: req.user.id,
      })
      .returning();

    res.status(200).json({
      message: "content added successfully",
      data: ytVideo[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const addNotesHandler = async (req: AuthRequest, res: Response) => {
  try {
    const { title, userNotes } = req.body;

    if (!title || !userNotes) {
      return res.status(400).json({
        message: "Required field missing",
      });
    }

    if (!req.user?.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const addNotes = await db
      .insert(notes)
      .values({
        title,
        userNotes,
        createdBy: req.user.id,
      })
      .returning();

    res.status(200).json({
      message: "content added successfully",
      data: addNotes[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getYoutubeHandler = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const data = await db.select().from(yt).where(eq(yt.createdBy, userId));

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getNotesHandler = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const data = await db
      .select()
      .from(notes)
      .where(eq(notes.createdBy, userId));

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
