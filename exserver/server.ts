import express, { Request, Response } from "express";
const app = express();
const port = 1111;

app.get("/", (req: Request, res: Response) => {
	res.json({message:"heyj there",status:200});
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});