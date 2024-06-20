import mongoose from "mongoose";
import validator from "validator";

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is UH OHHHHHHHHHHHHHHH");
      }
    },
  },
//   profilePicture: {
//     url: {
//       type: String,
//     },
//   },
});

export default User