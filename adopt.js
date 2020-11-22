import mongoose from "mongoose";

const adoptSchema = new mongoose.Schema({
  name: String,
  details: String,
  imgName: String,
});

export default mongoose.model("adopt-animals", adoptSchema);
