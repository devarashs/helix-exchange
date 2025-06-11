import { Schema, model } from "mongoose";

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  balance: number;
  ownedItems?: string[];
  createdCollections?: string[];
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
