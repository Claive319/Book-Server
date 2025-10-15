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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const Routes_1 = __importDefault(require("./Modules/Routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(Routes_1.default);
app.get("/", (req, res) => {
    res.send({ success: true, message: "I am here" });
});
const PORT = config_1.default.port || 4000;
function server() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(config_1.default);
            // ✅ Connect to MongoDB
            yield mongoose_1.default.connect(config_1.default.database_url);
            app.listen(config_1.default.port, () => {
                console.log(`✅ Server is Running on port ${4000}`);
            });
            console.log(`✅ Connected to database`);
        }
        catch (error) {
            console.error(`❌ Database connection error:`, error);
        }
    });
}
server();
