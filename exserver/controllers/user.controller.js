"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUsers = void 0;
//Controller for the /users routes
const allUsers = (req, res) => {
    const users = [
        {
            name: "ram",
            age: 12
        },
        {
            name: "dam",
            age: 14
        }
    ];
    res.json(users);
};
exports.allUsers = allUsers;
