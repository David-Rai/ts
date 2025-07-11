
import express from 'express'


const app=express()

app.get("/",(req,res)=>{

    res.json({message:"using ts with the ndoe js and express js"})
})

app.listen(1111,()=> console.log("server is running on the port 1111"))