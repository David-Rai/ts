import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.json({ message: "nodemon intregrated" });
});
app.listen(1111, () => {
    console.log("server is running");
});
