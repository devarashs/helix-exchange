import { Schema, model } from "mongoose";

export interface IItem {
  id: string;
  collectionId: Schema.Types.ObjectId;
  name: string;
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

const Item = model<IItem>("Item", ItemSchema);
export default Item;
