import { Types } from "mongoose";

export interface IBorrowBook {
    quantity : number,
    dueDate : Date,
    booksId : Types.ObjectId,

}