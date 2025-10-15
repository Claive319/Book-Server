import { Router } from "express";
import bookRoute from "../Books/book.routes";
import borrowRoute from "../Borrow/borrow.route";

const routes = Router()
routes.use("/books", bookRoute)
routes.use("/borrow" , borrowRoute)
 
export default routes;