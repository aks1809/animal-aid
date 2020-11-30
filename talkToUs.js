import mongoose from "mongoose";

const talkSchema = mongoose.Schema({
  message: String,
  userId: String,
  isAdmin: false,
  pictureUrl: String,
});

export default mongoose.model("talk-to-us", talkSchema);
