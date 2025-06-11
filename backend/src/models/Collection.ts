import { Schema, model } from "mongoose";

export interface ICollection {
  id: string;
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
  owner: {
    name: string;
    avatar: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
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
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
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

const Collection = model<ICollection>("Collection", CollectionSchema);

export default Collection;
