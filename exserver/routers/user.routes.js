"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_js_1 = require("../controllers/user.controller.js");
exports.router = express_1.default.Router();
//users for getting all the users from db
exports.router.get("/users", user_controller_js_1.allUsers);
