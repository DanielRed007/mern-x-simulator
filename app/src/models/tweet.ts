import { Schema, model, Document } from "mongoose";

interface User {
  user_id: string;
  username: string;
  display_name: string;
  profile_image_url: string;
  verified: boolean;
}

interface Media {
  media_url: string;
  type: string;
}

interface Mention {
  user_id: string;
  username: string;
}

interface URL {
  url: string;
  display_url: string;
}

interface Content {
  text: string;
  media: Media[];
  hashtags: string[];
  mentions: Mention[];
  urls: URL[];
}

interface Engagement {
  retweets: number;
  likes: number;
  replies: number;
  quotes: number;
}

interface ReplyTo {
  tweet_id: string;
  user_id: string;
}

interface QuoteTweet {
  tweet_id: string;
  user_id: string;
  content: Content;
  created_at: Date;
}

interface Tweet extends Document {
  user: User;
  content: Content;
  created_at: Date;
  engagement: Engagement;
  reply_to?: ReplyTo;
  quote_tweet?: QuoteTweet;
}

const UserSchema = new Schema<User>({
  user_id: { type: String, required: true },
  username: { type: String, required: true },
  display_name: { type: String, required: true },
  profile_image_url: { type: String, required: true },
  verified: { type: Boolean, required: true },
});

const MediaSchema = new Schema<Media>({
  media_url: { type: String, required: true },
  type: { type: String, required: true },
});

const MentionSchema = new Schema<Mention>({
  user_id: { type: String, required: true },
  username: { type: String, required: true },
});

const URLSchema = new Schema<URL>({
  url: { type: String, required: true },
  display_url: { type: String, required: true },
});

const ContentSchema = new Schema<Content>({
  text: { type: String, required: true },
  media: { type: [MediaSchema], default: [] },
  hashtags: { type: [String], default: [] },
  mentions: { type: [MentionSchema], default: [] },
  urls: { type: [URLSchema], default: [] },
});

const EngagementSchema = new Schema<Engagement>({
  retweets: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  replies: { type: Number, default: 0 },
  quotes: { type: Number, default: 0 },
});

const ReplyToSchema = new Schema<ReplyTo>({
  tweet_id: { type: String, required: true },
  user_id: { type: String, required: true },
});

const QuoteTweetSchema = new Schema<QuoteTweet>({
  tweet_id: { type: String, required: true },
  user_id: { type: String, required: true },
  content: { type: ContentSchema, required: true },
  created_at: { type: Date, required: true },
});

const TweetSchema = new Schema<Tweet>({
  user: { type: UserSchema, required: true },
  content: { type: ContentSchema, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  engagement: { type: EngagementSchema, required: true },
  reply_to: { type: ReplyToSchema, required: false },
  quote_tweet: { type: QuoteTweetSchema, required: false },
});

const TweetModel = model<Tweet>("Tweet", TweetSchema);

export default TweetModel;
