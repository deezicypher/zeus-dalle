import express from "express";
import dotenv from 'dotenv';
import {v2 as cloudinary} from "cloudinary";
import { db } from "../db.js";



dotenv.config();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from post')
})

export default router;



