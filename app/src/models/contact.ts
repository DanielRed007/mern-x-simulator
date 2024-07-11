import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide an name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  message: {
    type: String,
    required: [true, "Please provide an message"],
    unique: true,
  },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
