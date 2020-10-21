"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const http_1 = require("http");
const Port = 8000;
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(body_parser_1.default.json());
app.use(`/api`, routes_1.default);
const httpServer = http_1.createServer(app);
app.listen({ port: Port }, () => console.log(`\n🚀      Server is now running on http://localhost:8000/`));
