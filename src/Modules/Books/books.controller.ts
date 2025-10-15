import { model } from "mongoose"
// import Book from "./book.model"
import { Request, Response } from "express";
import { timeStamp } from "console";
import { Book } from "./book.model";

const createBook = async(req : Request, res: Response)=>{
    const payload = req.body;
    const book = new Book(payload)

    const data = await book.save()

    res.send({
        success : true,
        message : "Book created Successfully",
        data,
       
    })
}
const getOnlyAllBooks = async(req : Request, res: Response)=>{
    

    const data = await Book.find()

    res.send({
        success : true,
        message : "Books retrieved Successfully in Home Page",
        data,
    })
}

const getBooks = async(req : Request, res: Response)=>{
    

    const data = await Book.find()

    res.send({
        success : true,
        message : "Books retrieved Successfully",
        data,
    })
}
const getSingleBook = async(req : Request, res: Response)=>{
    
    const bookId = req.params.bookId
    const data = await Book.findById(bookId)

    res.send({
        success : true,
        message : "Book retrieved Successfully",
        data
    })
}
const updateBook = async(req : Request, res: Response)=>{
    
    const bookId = req.params.bookId
    const updatedBody = req.body
    const data = await Book.findByIdAndUpdate(bookId, updatedBody , {new : true})

    res.send({
        success : true,
        message : "Book updated Successfully",
        data
    })
}
const deleteSingleBook = async(req : Request, res: Response)=>{
    
    const bookId = req.params.bookId
    const data = await Book.findByIdAndDelete(bookId)

    res.send({
        success : true,
        message : "Book deleted Successfully",
        data
    })
}
const borrowBook = async(req : Request, res: Response)=>{
    const payload = req.body;
    const book = new Book(payload)

    const data = await book.save()

    res.send({
        success : true,
        message : "Book borrowed Successfully",
        data,
       
    })
}
export {createBook, getBooks, getSingleBook , updateBook , getOnlyAllBooks, deleteSingleBook}
