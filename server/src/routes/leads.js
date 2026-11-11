import { Router } from "express";
import { upload } from "../middleware/upload.js";
import Lead from "../models/Lead.js";

const router = Router();

router.post("/", upload.single("attachment"), async (req, res, next) => {
  try {
    const { type, name, email, phone, message } = req.body;

    if (!["contact", "request-talent"].includes(type)) {
      return res.status(400).json({ message: "Invalid lead type." });
    }
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "Name, email, phone, and message are required." });
    }

    const lead = await Lead.create({
      type,
      name,
      email,
      phone,
      message,
      attachmentPath: req.file ? req.file.filename : undefined,
      attachmentOriginalName: req.file ? req.file.originalname : undefined,
    });

    res.status(201).json({
      message: "Submitted successfully.",
      id: lead._id,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
