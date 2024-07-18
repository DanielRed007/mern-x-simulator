import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: [false, ""],
      unique: false,
    },
    message: {
      type: String,
      required: [false, ""],
      unique: false,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "modifiedAt",
    },
  }
);

export default mongoose.models.Tweet || mongoose.model("Tweet", TweetSchema);
