import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  title: String,
  description: String,
});

export default mongoose.model("success-stories", storySchema);
