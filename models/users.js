import { Schema, mongoose } from "mongoose";

const userSchema = new Schema({
  user_type: { type: String, required: false },
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: false },
  social_logins: { type: Object, required: false },
  password_hash: { type: String, required: true },
  is_email_verified: { type: Boolean, required: false },
  is_mobile_verified: { type: Boolean, required: false },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  deleted_at: { type: Date, required: false },
  profile_image: { type: String, required: false },
  meta: { type: Object, required: false, default: {} },
  access_token: { type: String, required: false },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
