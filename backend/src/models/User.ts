import { Schema, model } from "mongoose";

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

const User = model<IUser>("User", UserSchema);

export default User;
