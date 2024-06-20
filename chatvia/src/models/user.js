import { Schema, model, models } from "mongoose";

import isEmail from "validator/lib/isEmail";

const userSchema = new Schema({
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
      if (!isEmail(value)) {
        throw new Error("That uhhh...isn't an email");
      }
    },
  },
  profilePicture: {
    url: {
      type: String,
    },
  },
});

// check to see if there are users, if undefined or null then create a new model

const User = models.User || model('User', userSchema)

export default User;