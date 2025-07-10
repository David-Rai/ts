"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_js_1 = require("./routers/user.routes.js");
const app = (0, express_1.default)();
const port = 1111;
//Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(user_routes_js_1.router);
app.get("/", (req, res) => {
    res.json({ message: "heyj there", status: 200 });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
