import { Schema, model } from "mongoose";

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  balance: number;
  ownedItems?: Schema.Types.ObjectId[];
  createdCollections?: Schema.Types.ObjectId[];
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 },
    ownedItems: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    createdCollections: [{ type: Schema.Types.ObjectId, ref: "Collection" }],
    avatar: {
      type: String,
      required: true,
      default:
        "https://i.pinimg.com/236x/11/de/fc/11defc17b380ab9fe1861cd0aa817dc2.jpg",
    },
  },
  {
    timestamps: true,
  },
);

const User = model<IUser>("User", UserSchema);

export default User;
