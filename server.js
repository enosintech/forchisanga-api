import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

import wishModel from "./models/wishes.js";

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.post("/api/wish/new", async (req, res) => {
    try {
        await wishModel.create({
            wish: req.body.wish,
            name: req.body.name
        })
        res.json({status: "ok"})
    } catch (err) {
        res.json({status: "error", error: err})
    }
})

app.get("/api/wish", async (req, res) => {
    try {
        const wishes = await wishModel.find()

        return res.json({status: "ok", wishes: wishes})
    } catch (error) {
        console.log(error)
        res.json({status: "error", error: "Error"})
    }
})

mongoose.connect(process.env.MONGO_DB_URI).then(() => {
    console.log("Successfully Connected to Database!")
    app.listen(port, () => console.log(`Server is running on port ${port} successfully!`))
}).catch(console.error);


