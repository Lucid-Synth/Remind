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
      message: "Internal server error"
    });
  }
};

export const deleteYoutubeHandler = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!id) {
      return res.status(400).json({
        message: "Video id is required",
      });
    }

    const deleted = await db
      .delete(yt)
      .where(eq(yt.id, Number(id)))
      .returning();

    if (!deleted.length) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    if (deleted[0]?.createdBy !== userId) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    return res.status(200).json({
      message: "Video deleted successfully",
      data: deleted[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const deleteNotesHandler = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!id) {
      return res.status(400).json({
        message: "Note id is required",
      });
    }

    const deleted = await db
      .delete(notes)
      .where(eq(notes.id, Number(id)))
      .returning();

    if (!deleted.length) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    if (deleted[0]?.createdBy !== userId) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    return res.status(200).json({
      message: "Note deleted successfully",
      data: deleted[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};