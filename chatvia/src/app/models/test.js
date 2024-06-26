import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  file: Buffer,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
