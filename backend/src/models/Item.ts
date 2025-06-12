import { Schema, model } from "mongoose";

export interface IItem {
  _id: string;
  collectionId: Schema.Types.ObjectId;
  name: string;
  price: number;
  supply: number;
  image: string;
  description: string;
  attributes: {
    type: string;
    condition: string;
    productionYear: number;
    mobility: number;
  };
  ownerId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema = new Schema<IItem>(
  {
    collectionId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Collection",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    supply: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    attributes: {
      type: {
        type: String,
        required: true,
      },
      condition: {
        type: String,
        required: true,
      },
      productionYear: {
        type: Number,
        required: true,
      },
      mobility: {
        type: Number,
        required: true,
      },
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const Item = model<IItem>("Item", ItemSchema);
export default Item;
