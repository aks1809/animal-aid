import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  query: String,
  token: String,
  userId: String,
});

export default mongoose.model("contactqueries", contactSchema);
