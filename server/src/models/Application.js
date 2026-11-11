import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    jobId: { type: String, trim: true },
    jobTitle: { type: String, trim: true },
    coverNote: { type: String, trim: true },
    resumePath: { type: String },
    resumeOriginalName: { type: String },
    status: {
      type: String,
      enum: ["new", "reviewed", "shortlisted", "rejected"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
