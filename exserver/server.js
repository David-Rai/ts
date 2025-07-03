import express from "express";
const app = express();
const port = 1111;
app.get("/", (req, res) => {
    res.json({ message: "heyj there", status: 200 });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
