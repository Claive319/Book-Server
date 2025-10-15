import { model, Schema } from "mongoose";
import { IBorrowBook } from "./borrow.interface";

const borrowBookSchema = new Schema<IBorrowBook>(
  {
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true },
    book: {
        type : Schema.Types.ObjectId,
        ref : "books", 
        required : true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


export const BorrowedBooks = model<IBorrowBook>(
  "borrowedBooks",
  borrowBookSchema
);


