import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    required: [false, ""],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  role: {
    type: String,
    required: [true, "Please provide a role"],
    unique: false,
  },
  profileImg: {
    type: String,
    required: [false, "Please provide an image"],
    unique: false,
  },
  country: {
    type: String,
    required: [true, "Please provide an country"],
    unique: false,
  },
  followingCount: {
    type: Number,
    required: [false, "Please provide an country"],
    unique: false,
  },
  followerCount: {
    type: Number,
    required: [false, "Please provide an country"],
    unique: false,
  },
  tweetCount: {
    type: Number,
    required: [false, "Please provide an country"],
    unique: false,
  },
});

export default mongoose.models.Profile ||
  mongoose.model("Profile", ProfileSchema);
