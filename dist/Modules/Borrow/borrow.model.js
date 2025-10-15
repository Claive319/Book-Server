"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedBooks = void 0;
const mongoose_1 = require("mongoose");
const borrowBookSchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "books",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true,
});
exports.BorrowedBooks = (0, mongoose_1.model)("borrowedBooks", borrowBookSchema);
