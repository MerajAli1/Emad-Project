import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    Occassion: {
      type: String,
      required: true,
    },
    SpecialRequest: {
      type: String,
      default: "No Special Request",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", UserSchema);
