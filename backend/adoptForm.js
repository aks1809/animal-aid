import mongoose from "mongoose";

const adoptContactFormSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  phone: String,
  email: String,
  cemail: String,
  animal: String,
  reason: String,
});

export default mongoose.model("adopt-contact-forms", adoptContactFormSchema);
