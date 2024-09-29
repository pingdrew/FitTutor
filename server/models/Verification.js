// models/Verification.js
const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  submittedDocuments: [String], // URLs to uploaded certificates, credentials
  verificationStatus: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Admin who reviews
}, { timestamps: true });

module.exports = mongoose.model("Verification", verificationSchema);
