const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    isim: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    userName: {
      type: String,
      required: false,
     // unique: true,
      trim: true,
      lowercase: true,
      minlength:3,
      maxlength: 50,
    },
    pwd: {
      type: String,
      required: false,
     // unique: true,
      trim: true,
      lowercase: true,
      minlength:3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: false,
      //unique: true,
      lowercase: true,
      trim: true,
    },
    sifre: {
      type: String,
     // required: true,
      minlength: 6,
      trim: true,
    }
  },
  { collection: 'Users', timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
