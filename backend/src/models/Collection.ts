import { Schema, model } from "mongoose";

export interface ICollection {
  _id: string;
  slug: string;
  name: string;
  category:
    | "clothing"
    | "footwear"
    | "accessories"
    | "properties"
    | "weapons"
    | "vehicles";
  coverImage: string;
  floorPrice: number;
  volume24h: number;
  owner: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const CollectionSchema = new Schema<ICollection>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "clothing",
        "footwear",
        "accessories",
        "properties",
        "weapons",
        "vehicles",
      ],
    },
    coverImage: {
      type: String,
      required: true,
    },
    floorPrice: {
      type: Number,
      required: true,
    },
    volume24h: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const Collection = model<ICollection>("Collection", CollectionSchema);

export default Collection;
