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
exports.borrowController = void 0;
const borrow_model_1 = require("./borrow.model");
const borrowBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield borrow_model_1.BorrowedBooks.create(req.body);
        res.send({
            success: true,
            message: "Book borrowed Successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Ran into a Error",
            error,
        });
    }
});
const getBorrowedBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield borrow_model_1.BorrowedBooks.find();
        res.send({
            success: true,
            message: "Borrowed books got Successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Ran into a Error",
            error,
        });
    }
});
exports.borrowController = {
    borrowBook, getBorrowedBooks
};
