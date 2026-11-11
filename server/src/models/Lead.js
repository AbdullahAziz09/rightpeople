import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["contact", "request-talent"], required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    attachmentPath: { type: String },
    attachmentOriginalName: { type: String },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
