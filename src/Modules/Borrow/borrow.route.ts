import { Router } from "express";
import { borrowController } from "./borrow.controller";

const borrowRoute = Router();




borrowRoute.post("/", borrowController.borrowBook);       
borrowRoute.get("/", borrowController.getBorrowedBooks);   

export default borrowRoute;
