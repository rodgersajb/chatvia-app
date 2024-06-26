import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please supply a name",
    trim: true,
  },
  age: Number,
  picture: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
