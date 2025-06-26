import express,{Request,Response} from "express"

const app=express()

app.get("/",(req:Request,res:Response)=>{

    res.json({message:"nodemon intregrated"})
})


app.listen(1111,()=>{
    console.log("server is running")
})