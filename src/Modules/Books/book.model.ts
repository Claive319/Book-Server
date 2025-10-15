import { model, Schema } from "mongoose";
import { Ibooks} from "./interface";
import { IBorrowBook } from "../Borrow/borrow.interface";

const bookSchema = new Schema<Ibooks>(
  {
    title: { type: String, required: true, trim: true, min: 3, max: 255 },
    autthor: { type: String, required: true },
    genre: { type: String, required: true },
    isbn: { type: String, required: true },
    description: { type: String, required: true },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },
    available: { type: Boolean, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Book = model<Ibooks>("books", bookSchema);

bookSchema.static("IfZero", async function () {
  await this.updateMany({ copies: 0 }, { available: false });
  
});


