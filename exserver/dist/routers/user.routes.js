import express from 'express';
import { allUsers } from '../controllers/user.controller.js';
export const router = express.Router();
//users for getting all the users from db
router.get("/users", allUsers);
