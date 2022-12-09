import mongoose from 'mongoose';
const { Schema, model } = mongoose;
mongoose.set('strictQuery', false);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    strict: true,
    strictQuery: true,
  },
  { timestamps: true }
);

const User = model('User', userSchema);
export default User;
