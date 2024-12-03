import mongoose, { Schema, Model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const productSchema = new Schema({
  uuid: { type: String, required: true, unique: true, default: uuidv4 },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  rate: { type: Number, required: true },
  count: { type: Number, required: true },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
