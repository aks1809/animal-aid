import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  adminId: String,
});

export default mongoose.model("admins", adminSchema);
