import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  subscription: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
},
{ timestamps: true },
{ versionKey: false });

export default mongoose.model('User', User);