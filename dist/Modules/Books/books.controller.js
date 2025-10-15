"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleBook = exports.getOnlyAllBooks = exports.updateBook = exports.getSingleBook = exports.getBooks = exports.createBook = void 0;
const book_model_1 = require("./book.model");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const book = new book_model_1.Book(payload);
    const data = yield book.save();
    res.send({
        success: true,
        message: "Book created Successfully",
        data,
    });
});
exports.createBook = createBook;
const getOnlyAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield book_model_1.Book.find();
    res.send({
        success: true,
        message: "Books retrieved Successfully in Home Page",
        data,
    });
});
exports.getOnlyAllBooks = getOnlyAllBooks;
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield book_model_1.Book.find();
    res.send({
        success: true,
        message: "Books retrieved Successfully",
        data,
    });
});
exports.getBooks = getBooks;
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const data = yield book_model_1.Book.findById(bookId);
    res.send({
        success: true,
        message: "Book retrieved Successfully",
        data
    });
});
exports.getSingleBook = getSingleBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const updatedBody = req.body;
    const data = yield book_model_1.Book.findByIdAndUpdate(bookId, updatedBody, { new: true });
    res.send({
        success: true,
        message: "Book updated Successfully",
        data
    });
});
exports.updateBook = updateBook;
const deleteSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const data = yield book_model_1.Book.findByIdAndDelete(bookId);
    res.send({
        success: true,
        message: "Book deleted Successfully",
        data
    });
});
exports.deleteSingleBook = deleteSingleBook;
const borrowBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const book = new book_model_1.Book(payload);
    const data = yield book.save();
    res.send({
        success: true,
        message: "Book borrowed Successfully",
        data,
    });
});
