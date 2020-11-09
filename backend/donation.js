import mongoose from "mongoose";

const donationSchema = mongoose.Schema({
  frequency: String,
  amount: Number,
  paymentMethod: String,
  firstName: String,
  lastName: String,
  emailAddress: String,
  pan: String,
  userId: String,
});

export default mongoose.model("donations", donationSchema);
