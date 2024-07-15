import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    required: [false, ""],
    unique: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: [false, ""],
    unique: true,
  },
  message: {
    type: String,
    required: [false, ""],
    unique: true,
  },
});

export default mongoose.models.Tweet || mongoose.model("Tweet", TweetSchema);
