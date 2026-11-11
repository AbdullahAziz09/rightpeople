import { Router } from "express";
import { upload } from "../middleware/upload.js";
import Application from "../models/Application.js";

const router = Router();

router.post("/", upload.single("resume"), async (req, res, next) => {
  try {
    const { name, email, phone, jobId, jobTitle, coverNote } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Name, email, and phone are required." });
    }

    const application = await Application.create({
      name,
      email,
      phone,
      jobId,
      jobTitle,
      coverNote,
      resumePath: req.file ? req.file.filename : undefined,
      resumeOriginalName: req.file ? req.file.originalname : undefined,
    });

    res.status(201).json({
      message: "Application submitted successfully.",
      id: application._id,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
