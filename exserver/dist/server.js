import express from "express";
import { router } from "./routers/user.routes.js";
const app = express();
const port = 1111;
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.get("/", (req, res) => {
    res.json({ message: "heyj there", status: 200 });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
