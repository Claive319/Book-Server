import { Request, Response } from "express";
import { BorrowedBooks } from "./borrow.model";

const borrowBook = async (req: Request, res: Response) => {
  try {
    const data = await BorrowedBooks.create(req.body);
    res.send({
      success: true,
      message: "Book borrowed Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Ran into a Error",
      error,
    });
  }
};

const getBorrowedBooks = async (req: Request, res: Response) => {
  try {
    const data = await BorrowedBooks.find();
    res.send({
      success: true,
      message: "Borrowed books got Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Ran into a Error",
      error,
    });
  }
};

export const borrowController = {
  borrowBook, getBorrowedBooks
};
