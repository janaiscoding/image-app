import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, minLength: 1 },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    avatar: {
      data: { type: Buffer },
      contentType: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);