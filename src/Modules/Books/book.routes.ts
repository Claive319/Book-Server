import { Router } from "express";
import { createBook, deleteSingleBook, getBooks, getSingleBook, updateBook } from "./books.controller";
// import { createBook, deleteSingleBook, getBooks, getSingleBook, updateBook } from "./book.controller";

const bookRoute = Router();

bookRoute.get("/", getBooks);              
bookRoute.post("/", createBook);            
bookRoute.get("/:bookId", getSingleBook);    
bookRoute.patch("/:bookId", updateBook);    
bookRoute.delete("/:bookId", deleteSingleBook); 

export default bookRoute;

